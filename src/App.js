import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <div className="header">Weather App</div>
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
      </div>
    </div>
  );
}

export default App;
