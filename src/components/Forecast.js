import React from "react";
import Sun from "../images/sun.png";
import "../styles/Forecast.css";

export default function Forecast(props) {
  return (
    <li className="tomorrow">
      <span className="icon">
        <img alt="cloud" className="forecast-pic" src={Sun} width={40} />
      </span>
      <span className="day">{props.day}</span>{" "}
      <strong className="forecast-temp">{props.maxTemp}°</strong>{" "}
      <span className="forecast-temp">{props.minTemp}°</span>
    </li>
  );
}
