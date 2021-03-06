import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(public auth: AuthService,
              private router: Router ) { }

  ngOnInit(): void {

    this.menuItems = [
        {
          label: 'Users',
          routerLink: '/users',
          icon: PrimeIcons.USERS
        },
        {
          label: 'Weather',
          routerLink: '/weather',
          icon: PrimeIcons.CLOUD
        }
    ];

  }

  disconnect(): void {
    this.auth.disconnect();
    this.router.navigate(['/login']);
  }

}
