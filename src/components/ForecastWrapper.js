import React from "react";
import Forecast from "../components/Forecast";

import "../styles/ForecastWrapper.css";
export default function ForecastWrapper() {
  return (
    <ul className="weather-forecast">
      <Forecast day="Tuesday" maxTemp={21} minTemp={16} />
      <Forecast day="Wednesday" maxTemp={23} minTemp={15} />
      <Forecast day="Thursday" maxTemp={22} minTemp={17} />
      <Forecast day="Friday" maxTemp={24} minTemp={19} />
      <Forecast day="Saturday" maxTemp={19} minTemp={13} />
    </ul>
  );
}
