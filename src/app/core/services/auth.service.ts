import { ILoginRequest, IUser } from './../domain/types';
import { Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.backendServer}/auth`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public authenticate(data: ILoginRequest): Observable<IUser> {
    return this.http.post<IUser>(`${this.authUrl}/login`, data).pipe(
      tap( (userData: IUser) => {
        if (userData && userData.id) {
          this.setAuthId( userData.email, userData.password );
          this.setLoggedUser( userData );
        } else {
          this.disconnect();
        }
      })
    );
  }

  public setAuthId(username: string, password: string): void {
    const token = window.btoa(`${username}:${password}`);
    sessionStorage.setItem('auth-id', token);
  }

  public setLoggedUser(data: IUser): void {
    const userStr = JSON.stringify( data )
    sessionStorage.setItem('user-data', userStr);
  }

  public getAuthId(): string | null {
    return sessionStorage.getItem('auth-id');
  }

  public getLoggedUser(): IUser | null {
    const userStr = sessionStorage.getItem('user-data');
    if (userStr) {
      return JSON.parse( userStr );
    }
    return null;
  }

  public disconnect(): void {
    sessionStorage.removeItem('auth-id');
    sessionStorage.removeItem('user-data');
  }
}
