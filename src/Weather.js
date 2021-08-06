import React from "react";
import Footer from "./components/Footer";
import Search from "./components/Search";
import CurrentDisplay from "./components/CurrentDisplay";
import ForecastWrapper from "./components/ForecastWrapper";

import "./styles/Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Weather-App">
        <Search />
        <CurrentDisplay />
        <ForecastWrapper />
      </div>
      <Footer />
    </div>
  );
}
