import React from "react";
import FormattedDate from "./FormattedDate";
import "../styles/CurrentInfo.css";

export default function CurrentInfo(props) {
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
        </div>
      </div>
      </div>
)
}