import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";
import "../styles/SearchEngine.css";

export default function SearchEngine(props) {
const [units, setUnits] = useState("metric");
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });
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
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`})

}

function search() {
 let apiKey = "e99a6b83a02b9bd00c5d8a973f6c63e0"; 
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
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

function showFarenheit() {
setUnits("imperial");
search();
}
function showCelsius() {
setUnits("metric");
search();
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
    <button className={units === "metric" ? "active" : "rest"}  onClick={showCelsius}>°C</button>
    <br />
    <button className={units === "imperial"  ? "active" : "rest"} onClick={showFarenheit}>°F</button>
    </div>
    <CurrentInfo data={weatherData} />
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

 

