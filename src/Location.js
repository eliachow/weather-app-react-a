import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="location">
      <h1>Vancouver</h1>
      <h2>Date</h2>
      <h3>Time</h3>
      <div className="WeatherData">
        <span>Weather Image ᵒC | ᵒF</span>
        <div>Partially Cloudy</div>
        <div>Humidity</div>
        <div>Wind Speed</div>
      </div>
    </div>
  );
}
