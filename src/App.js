import Header from "./Header";
import Fiveday from "./Fiveday";
import Location from "./Location";
import Footer from "./Footer";
import cloudVideo from "./media/cloudVideo.mp4";

function App() {
  return (
    <div className="App">
      <video className="CloudVideo" src={cloudVideo} autoPlay loop muted />
      <div className="content">
        <Header />
        <div className="row">
          <div className="col-7">
            <Location />
          </div>
          <div className="col-5">
            <Fiveday />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
