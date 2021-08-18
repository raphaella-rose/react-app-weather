import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastImperial(props) {


function maxTemp() {
let temp = Math.round((props.data.temp.max) * 9/5) + 32;
return `${temp}°`;
}

function minTemp() {
let temp = Math.round((props.data.temp.min) * 9/5) + 32;
return `${temp}°`;
}

function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return days[day];
}

return ( 
    <li className="tomorrow">
      <span className="icon">
      <WeatherIcon alt={props.data.weather[0].description} code={props.data.weather[0].icon} size={40} />  
      </span>
      <span className="day">{day()}</span>{" "}
      <strong className="forecast-temp">{maxTemp()}</strong>{" "}
      <span className="forecast-temp">{minTemp()}</span>
    </li>)
}