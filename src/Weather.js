import React from "react";
import Footer from "./components/Footer";
import SearchEngine from "./components/SearchEngine";
import "./styles/Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Weather-App">
        <SearchEngine defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}
