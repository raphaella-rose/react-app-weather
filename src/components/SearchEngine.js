import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchEngine.css";

export default function SearchEngine(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse(response) {
console.log(response.data)
  setWeatherData({   
      ready: true,
      Temperature: response.data.main.temp,
      Date: "Monday 11:00",
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      High: response.data.main.temp_max,
      Low: response.data.main.temp_min,
      Name: response.data.name,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`})


  
}

if (weatherData.ready) {
  return (
    <div className="SearchEngine">
    <form>
      <input
        className="search"
        type="text"
        placeholder="Enter a city..."
        autoComplete="off"
      />
      <input className="go-button" type="submit" value="Go" />
    </form>
      <h1>{weatherData.Name}</h1>
      <div className="row">
        <div className="col-6">
          <ul className="current-details">
            <li className="todays-date">{weatherData.Date}</li>
            <li className="weather-description">{weatherData.Description}</li>
            <li className="high-low-temp">High: {Math.round(weatherData.High)}° Low: {Math.round(weatherData.Low)}°</li>
            <li className="windspeed">Windspeed: {Math.round(weatherData.Wind)} km/h</li>
            <li className="humidity">Humidity: {weatherData.Humidity}%</li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <img className="pic" alt={weatherData.Description} src={weatherData.Icon} />
          <strong className="current-temperature">{Math.round(weatherData.Temperature)}</strong>
          <small className="unit-selector celcius">°C</small>
        </div>
      </div>
    </div>);
} else {
  let apiKey = "e99a6b83a02b9bd00c5d8a973f6c63e0"; 
 let units = "metric";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
 axios.get(apiUrl).then(handleResponse);
  return "loading..."
}
}

 

