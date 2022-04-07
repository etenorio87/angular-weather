import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SearchLocationComponent } from './ui/components/search-location/search-location.component';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './ui/components/weather-display/weather-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchLocationComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
