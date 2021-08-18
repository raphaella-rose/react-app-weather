import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import ForecastImperial from "./ForecastImperial";
import "../styles/ForecastWrapper.css";

export default function ForecastWrapper(props) {
const [forecastData, setForecastData] = useState(null)
const [ready, setReady] = useState(false);
function handleResponse(response) {
setForecastData(response.data.daily);
setReady(true);
}

if (ready && props.units === "metric") {
return (
    <ul className="weather-forecast">
    {forecastData.map(function (dailyForecast, index) {
      if (index > 0 && index <6) {
      return (
      <Forecast key={index} data={dailyForecast} />
      )
}
else {
  return null;
}
})}
    </ul>
  );
}
if (ready && props.units === "imperial") {
return (
    <ul className="weather-forecast">
    {forecastData.map(function (dailyForecast, index) {
      if (index > 0 && index <6) {
      return (
      <ForecastImperial key={index} data={dailyForecast} />
      )
}
else {
  return null;
}
})}
    </ul>
  );
}
else {
let lat = (props.data.Lat);
let lon = (props.data.Lon);
let apiKey = "c18447d0584798362f0576e1f957d870"; 
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);

 return null;
}
}
