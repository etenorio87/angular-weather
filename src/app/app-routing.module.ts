import { WeatherComponent } from './ui/components/weather/weather.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const rutas: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./ui/components/login/login.module').then(m => m.LoginModule) },
  { path: 'weather', loadChildren: () => import('./ui/components/weather/weather.module').then(m => m.WeatherModule) },
  { path: 'users', loadChildren: () => import('./ui/components/users/users.module').then(m => m.UsersModule) }

  /*

  */
];


@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
