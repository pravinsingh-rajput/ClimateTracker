import "./App.css";
import Header from "./Component/Header/Header";
import Now from "./Component/Now/Now";
import Forecast from "./Component/FutureForecast/Forecast";
import TodaysHighlight from "./Component/TodayHighlight/TodaysHighlight";
import HourlyTemp from "./Component/Hourly/HourlyTemp";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_section">
        <div className="left_container">
          <Now className="now" />
          <h4 className="forecast_label">5 Day Forecast</h4>
          <Forecast className="forecast" />
        </div>
        <div className="right_container">
          <TodaysHighlight />
          <h4 className="forecast_label">Today At</h4>
          <HourlyTemp />
        </div>
      </div>
    </div>
  );
}

export default App;
