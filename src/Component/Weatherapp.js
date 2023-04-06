import React, { useState } from "react";
import Now from "./Now/Now";
import Forecast from "./FutureForecast/Forecast";
import TodaysHighlight from "./TodayHighlight/TodaysHighlight";
import HourlyTemp from "./Hourly/HourlyTemp";
import "./Weatherapp.css";
import Icon from "@mui/icons-material/FilterDramaOutlined";
import CurrentIcon from "@mui/icons-material/MyLocationOutlined";
import Searchicon from "@mui/icons-material/TravelExploreSharp";

const Weatherapp = (props) => {
  const cityname = props.city;

  const [inputdata, setinputdata] = useState();

  const onChangeHandler = (e) => {
    setinputdata(e.target.value);
  };

  let city;

  const handleSubmit = (e) => {
    e.preventDefault();
    setinputdata("");
    city = inputdata;
    console.log(city);
  };

  return (
    <div>
      <div className="header">
        <div className="appname">
          <Icon />
          <h3>Weather App</h3>
        </div>
        <div className="loctaion_container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search City..."
              value={inputdata}
              onChange={onChangeHandler}
            />
            <Searchicon className="search_btn" onClick={handleSubmit} />
          </form>
          <button className="current_location">
            <CurrentIcon />
            <div className="loc_label">Current Location</div>
          </button>
        </div>
      </div>

      {/* Components */}
      <div className="main_section">
        <div className="left_container">
          <Now className="now" />
          <h4 className="forecast_label">5 Day Forecast</h4>
          <Forecast className="forecast" />
        </div>
        <div className="right_container">
          <TodaysHighlight />
          <h4 className="forecast_label todayLabel">Today At</h4>
          <HourlyTemp />
        </div>
      </div>
      <button onClick={console.log(cityname)}>Hellllll</button>
    </div>
  );
};

export default Weatherapp;
