import React from "react";
import "./Location.css";
import Hourly from "./Hourly";

export default function Location() {
  return (
    <div className="location">
      <h1>Vancouver</h1>
      <h2>Date</h2>
      <h3>Time</h3>
      <div className="WeatherData">
        <div className="row">
          <div className="col-5">Weather Image</div>
          <div className="col-6">
            <span>ᵒC | ᵒF</span>
            <div>Partially Cloudy</div>
            <div>Humidity</div>
            <div>Wind Speed</div>
          </div>
        </div>
      </div>
      <Hourly />
    </div>
  );
}
