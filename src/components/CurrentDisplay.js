import React from "react";
import Sun from "../images/sun.png";

import "../styles/CurrentDisplay.css";

export default function CurrentDisplay() {
  return (
    <div class="CurrentDisplay">
      <h1>London</h1>
      <div className="row">
        <div className="col-6">
          <ul className="current-details">
            <li className="todays-date">Monday 11:00</li>
            <li className="weather-description">Sunny</li>
            <li className="high-low-temp">High: 20° Low: 16°</li>
            <li className="windspeed">Windspeed: 8 Km/H</li>
            <li className="humidity">Humidity: 83%</li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <img className="pic" alt="Sun" src={Sun} />
          <strong className="current-temperature">16</strong>
          <small className="unit-selector celcius">°C</small>
        </div>
      </div>
    </div>
  );
}