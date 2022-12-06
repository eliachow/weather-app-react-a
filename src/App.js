import Header from "./Header";
import Fiveday from "./Fiveday";
import Location from "./Location";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-7">
          <Location />
        </div>
        <div className="col-5">
          <Fiveday />
        </div>
      </div>
    </div>
  );
}

export default App;
