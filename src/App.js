import Header from "./Header";
import Date from "./Date";

function App() {
  return (
    <div className="App">
      <Header />
      <Date />
      <div className="row">
        <div className="col-7">Test Location</div>
        <div className="col-5">Test Fiveday</div>
      </div>
    </div>
  );
}

export default App;
