import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="TopSection">
      <div className="title">Weather App</div>
      <form class="row search-bar">
        <div class="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            autoFocus="on"
          />
        </div>
        <div class="col-3">
          <input type="submit" class="form-control" value="Search" />
        </div>
        <div class="col-3">
          <input type="submit" class="form-control" value="Location" />
        </div>
      </form>
    </div>
  );
}
