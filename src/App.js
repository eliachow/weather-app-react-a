import Header from "./Header";
import Fiveday from "./Fiveday";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="testdate">Date Test</div>
      <div className="row">
        <div className="col-7">Test Location</div>
        <div className="col-5">
          <Fiveday />
        </div>
      </div>
    </div>
  );
}

export default App;
