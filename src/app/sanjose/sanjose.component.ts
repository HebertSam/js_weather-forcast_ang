import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  current = "sanjose"
  weather;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.getWeather(this.current, (data)=>{
      this.weather = data
      console.log(this.weather)
    })
  }

}
