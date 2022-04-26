import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { RoleGuard } from 'src/app/core/guards/role.guard';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'form/create', component: UserFormComponent, canActivate: [RoleGuard], data: { role: 'ROLE_ADMIN' } },
  { path: 'form/update/:id', component: UserFormComponent, canActivate: [RoleGuard], data: { role: ['ROLE_ADMIN', 'ROLE_EDITOR'] } }
];

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputSwitchModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatePipe],
  exports: [
    UsersListComponent,
    UserDetailComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
