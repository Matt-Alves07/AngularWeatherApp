export interface WeatherData {
  coord: {
    lon: number,
    lat: number,
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string,
    }
  ],
  base: string,
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
    feels_like: number,
  },
  visibility: number,
  wind: {
    deg: number,
    speed: number,
  },
  clouds: {
    all: number,
  },
  dt: number,
  sys: {
    id: number,
    type: number,
    sunset: number,
    sunrise: number,
    country: string,
  },
  timezone: number,
  id: number,
  name: string,
  cod: number,
}
