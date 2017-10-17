import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const api = "http://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&APPID=55e0910892d869cf892d21b29375ff6e"

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(loc, cb){
    this._http.get(api + loc + apiKey).subscribe(
      (res) =>{
        cb(res.json())
      },
      (err) =>{
        console.log(err)
      }
    )
  }
}
