import { LayoutModule } from './ui/layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTPP_INTERCEPTORS_PROVIDERS } from './core/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    LayoutModule,

  ],
  providers: [HTPP_INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
