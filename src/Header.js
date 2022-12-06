import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="top-section">
      <div className="title">Weather App</div>
      <form class="row search-bar">
        <div class="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
          />
        </div>
        <div class="col-3">
          <input type="submit" class="form-control" value="Search" />
        </div>
        <div class="col-3">
          <input type="submit" class="form-control" value="Location" />
        </div>
      </form>

      <div className="datetime">Monday January 1, 2022 10:00</div>
    </div>
  );
}
