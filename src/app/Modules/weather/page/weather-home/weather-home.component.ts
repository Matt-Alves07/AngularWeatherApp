import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/Models/Interfaces/weather.inteface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html'
})
export class WeatherHomeComponent implements OnInit {
  private initialCityName: string = 'Rio de Janeiro';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.initialCityName);
  }

  getWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);
          console.log(this.weatherData.name);
          console.log(this.weatherData.main);
        },
        error: (error) => console.log(error),
      });
  }
}
