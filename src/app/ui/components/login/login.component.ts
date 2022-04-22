import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ILoginRequest } from 'src/app/core/domain/types';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private auth: AuthService,
              private router: Router) {
    this.formLogin = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    const data: ILoginRequest = this.formLogin.value;

    this.auth.authenticate( data ).subscribe( user => {
      if (user) {
        this.router.navigate(['/users']);
      } else {
        throw Error('Usuario invalido');
      }
    } );
  }

}
