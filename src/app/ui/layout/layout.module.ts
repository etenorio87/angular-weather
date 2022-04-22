import { DirectivesModule } from './../../core/directives/directives.module';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ButtonModule,
    CommonModule,
    DirectivesModule,
    MenubarModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
