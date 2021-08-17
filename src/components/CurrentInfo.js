import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "../styles/CurrentInfo.css";

export default function CurrentInfo(props) {
const [units, setUnits] = useState("metric");
let farenheitMax = ((props.data.High) * 9/5) + 32;
let farenheitMin = ((props.data.Low) * 9/5) + 32;
let farenheitTemp = ((props.data.Temperature) * 9/5) + 32;

function showFarenheit(event) {
event.preventDefault();
setUnits("imperial");
}

function showCelsius(event) {
event.preventDefault();
setUnits("metric");
}

if (units === "metric") {
return (
  <div className="CurrentInfo">
  <h1>{props.data.Name}</h1>
      <div className="row">
        <div className="col-6">
          <ul className="current-details">
            <li className="todays-date"><FormattedDate date={props.data.Date} /></li>
            <li className="weather-description">{props.data.Description}</li>
            <li className="high-low-temp">High: {Math.round(props.data.High)}° Low: {Math.round(props.data.Low)}°</li>
            <li className="windspeed">Windspeed: {Math.round(props.data.Wind)} km/h</li>
            <li className="humidity">Humidity: {props.data.Humidity}%</li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <img className="pic" alt={props.data.Description} src={props.data.Icon} />
          <strong className="current-temperature">{Math.round(props.data.Temperature)}</strong>
          <div className="unit-selector">
    <button className="active"  onClick={showCelsius}>°C</button>
    <br />
    <button className="rest" onClick={showFarenheit}>°F</button>
    </div>
      </div>
      </div>
      </div>
)} else {
  return (<div className="CurrentInfo">
  <h1>{props.data.Name}</h1>
      <div className="row">
        <div className="col-6">
          <ul className="current-details">
            <li className="todays-date"><FormattedDate date={props.data.Date} /></li>
            <li className="weather-description">{props.data.Description}</li>
            <li className="high-low-temp">High: {Math.round(farenheitMax)}° Low: {Math.round(farenheitMin)}°</li>
            <li className="windspeed">Windspeed: {Math.round(props.data.Wind)} km/h</li>
            <li className="humidity">Humidity: {props.data.Humidity}%</li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <img className="pic" alt={props.data.Description} src={props.data.Icon} />
          <strong className="current-temperature">{Math.round(farenheitTemp)}</strong>
          <div className="unit-selector">
    <button className="rest"  onClick={showCelsius}>°C</button>
    <br />
    <button className="active" onClick={showFarenheit}>°F</button>
    </div>
      </div>
      </div>
      </div>)
}
}