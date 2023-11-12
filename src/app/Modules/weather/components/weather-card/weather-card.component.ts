import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/Models/Interfaces/weather.inteface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  //Data received from the parent component
  @Input() weatherDataInput!: WeatherData;

  //Icons used to display data
  windIcon = faWind;
  humidityIcon = faDroplet;
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
}
