import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IWeatherResult } from 'src/app/core/domain/types';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  weatherResult: IWeatherResult = {};

  private subs: Subscription[] = [];

  constructor( private weatherService: WeatherService ) {}

  ngOnInit(): void {
    const sub = this.weatherService._weatherResultChanged$.subscribe( result => this.weatherResult = result);
    this.subs.push( sub );
  }

  ngOnDestroy(): void {
      this.subs.forEach( sub => sub.unsubscribe() );
  }

}
