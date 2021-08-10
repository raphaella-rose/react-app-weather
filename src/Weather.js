import React from "react";
import Footer from "./components/Footer";
import SearchEngine from "./components/SearchEngine";
import ForecastWrapper from "./components/ForecastWrapper";
import "./styles/Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Weather-App">
        <SearchEngine defaultCity="London" />
        <ForecastWrapper />
      </div>
      <Footer />
    </div>
  );
}
