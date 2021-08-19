import React from "react";

export default function WeatherIcon(props) {
let size = (props.size);
let code = (props.code);
let alt = (props.alt);
let icon = `https://openweathermap.org/img/wn/${code}@2x.png`
return (
  <img  alt={alt} className="forecast-pic" src={icon} width={size} />
)
}