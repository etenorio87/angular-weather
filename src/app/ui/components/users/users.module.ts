import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'form/create', component: UserFormComponent },
  { path: 'form/update/:id', component: UserFormComponent }
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
    RouterModule.forChild(routes)
  ],
  exports: [
    UsersListComponent,
    UserDetailComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
