import { Observable } from 'rxjs';
import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../domain/types';

@Directive({
  selector: '[appIsAuth]'
})
export class IsAuthDirective implements OnInit {
  @Input() public appIsAuth = false;

  private isLoggedChange$: Observable<IUser | null>;

  constructor(
    private auth: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    this.isLoggedChange$ = this.auth.loggedUser$;
  }


  ngOnInit(): void {

    this.isLoggedChange$.subscribe( loggedUser => {

      if ((loggedUser && this.appIsAuth) || (!loggedUser && !this.appIsAuth)) {
        this.viewContainerRef.createEmbeddedView( this.templateRef );
      } else {
        this.viewContainerRef.clear();
      }

    } );

  }


}
