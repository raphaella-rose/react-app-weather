import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";
import ForecastWrapper from "./ForecastWrapper";
import "../styles/SearchEngine.css";


export default function SearchEngine(props) {
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });
const [units, setunits] = useState("metric");
function handleResponse(response) {
  setWeatherData({   
      ready: true,
      Temperature: response.data.main.temp,
      Date: new Date(response.data.dt * 1000),
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      High: response.data.main.temp_max,
      Low: response.data.main.temp_min,
      Name: response.data.name,
      Lon: response.data.coord.lon,
      Lat: response.data.coord.lat,
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`})
    }

function search() {
 let apiKey = "c18447d0584798362f0576e1f957d870"; 
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
 axios.get(apiUrl).then(handleResponse);
 return "loading..."
}

function handleSubmit(event) {
event.preventDefault();
search(city);
}

function handleCityChange(event) {
setCity(event.target.value)
}

function showFarenheit(event) {
event.preventDefault();
setunits("imperial")
}

function showCelsius(event) {
event.preventDefault();
setunits("metric")
}

if (weatherData.ready) {
  return (
    <div className="SearchEngine">
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Enter a city..."
        autoComplete="off"
        onChange={handleCityChange}
      />
      <input className="go-button" type="submit" value="Go" />
    </form>
    <div className="unit-selector">
    <button href="#" className={units === "metric" ? "active" : "rest"}  onClick={showCelsius}>°C</button>
    <br />
    <button href="#" className={units === "imperial"  ? "active" : "rest"} onClick={showFarenheit}>°F</button>
    </div>
    <CurrentInfo data={weatherData} units={units}/>
    <ForecastWrapper data={weatherData} units={units} />
    </div>);
} else {
  search();
  return (
    <p>
    loading...
    </p>
  )
}
}

 

