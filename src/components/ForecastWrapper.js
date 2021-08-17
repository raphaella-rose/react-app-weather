import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "../styles/ForecastWrapper.css";

export default function ForecastWrapper(props) {
const [forecastData, setForecastData] = useState(null)
const [ready, setReady] = useState(false);
function handleResponse(response) {
setForecastData(response.data.daily);
setReady(true);
}

if (ready) {
return (
    <ul className="weather-forecast">
   <Forecast data={forecastData[0]} />
    </ul>
  );
} else {
let lat = (props.data.Lat);
let lon = (props.data.Lon);
let apiKey = "c18447d0584798362f0576e1f957d870"; 
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);

 return null;
}
}
