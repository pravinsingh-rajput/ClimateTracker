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
  const [inputdata, setinputdata] = useState();

  const onChangeHandler = (e) => {
    setinputdata(e.target.value);
  };

  let fetcheddata = "";
  let airData = "";

  let [data, setData] = useState({
    temp: "",
    condition: "",
    city: "",
    country: "",
    lon: "",
    lat: "",
    sunrise: "",
    sunset: "",
    humidity: "",
    pressure: "",
    visibility: "",
    feels_like: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getdata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&units=metric&appid=${props.apikey}`
    );

    fetcheddata = await getdata.json();

    const getAirData = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${fetcheddata.coord.lat}&lon=${fetcheddata.coord.lon}&appid=${props.apikey}`
    );

    airData = await getAirData.json();

    console.log(fetcheddata, airData);

    setinputdata("");
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
    </div>
  );
};

export default Weatherapp;
