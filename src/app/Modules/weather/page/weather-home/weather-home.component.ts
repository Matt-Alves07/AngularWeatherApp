import { Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/Models/Interfaces/weather.inteface';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  //Private variables used only in the current class
  private readonly destroy$: Subject<void> = new Subject();

  //Other variables
  cityname: string = '';
  searchIcon = faMagnifyingGlass;
  initialCityName: string = 'Rio de Janeiro';

  //Interface used to fetch the API data
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.initialCityName);
  }

  //Fetch data from Weather API
  getWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherData = response);
          console.log(this.weatherData);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWeather(this.cityname);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
