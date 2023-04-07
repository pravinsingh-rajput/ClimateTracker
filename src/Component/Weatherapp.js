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
  const [inputValue, setInputValue] = useState("");
  const [coordinate, setCoordinate] = useState({
    lat: "",
    lon: "",
  });
  const [usercoord, setUserCoord] = useState({
    city: "",
    country: "",
  });

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const [fetched_data, setfetched_data] = useState({
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
    PM25: "",
    SO2: "",
    NO2: "",
    O3: "",
  });

  const displayairdata = (data) => {
    console.log(data);
  };

  const databyname = (data) => {
    console.log(data);
    setfetched_data({
      ...fetched_data,
      temp: data.main.temp,
      condition: "",
      city: data.name,
      country: data.sys.country,
      lon: data.coord.lon,
      lat: data.coord.lat,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      feels_like: data.main.feels_like,
      PM25: "",
      SO2: "",
      NO2: "",
      O3: "",
    });
  };

  // Fetching data by input
  const fetchbyname = () => {
    return new Promise((resolve, reject) => {
      console.log(inputValue);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${props.apikey}`
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((data) => reject("Error"));
    });
  };

  // Fetching air data
  const fetchairdata = () => {
    return new Promise((resolve, reject) => {
      fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${fetched_data.lat}&lon=${fetched_data.lon}&appid=${props.apikey}`
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((data) => reject("Error"));
    });
  };

  // -----------------------------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchbyname().then(databyname);

    setTimeout(() => {
      fetchairdata().then(displayairdata);
    }, 4000);

    setInputValue("");
  };

  // ------------------------------------------------------------------

  // Accessing User Location With coordinate
  function getuserlocation() {
    return new Promise((reslove, reject) => {
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinate.lat}&longitude=${coordinate.lon}&localityLanguage=en`
      )
        .then((res) => res.json())
        .then((data) => reslove(data))
        .catch((data) => reslove("Error"));
    });
  }

  const displaydata = (fetchData) => {
    setUserCoord({
      ...usercoord,
      city: fetchData.city,
      country: fetchData.countryName,
    });
  };

  // Getting Location Coordinate from user
  const getlocation = () => {
    const success = (position) => {
      setCoordinate({
        ...coordinate,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };
    const error = () => {
      console.log("Cancel");
    };
    navigator.geolocation.getCurrentPosition(success, error);

    getuserlocation().then(displaydata);
    fetchbyname().then(databyname);
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
              value={inputValue}
              onChange={onChangeHandler}
            />
            <Searchicon className="search_btn" onClick={handleSubmit} />
          </form>
          <button className="current_location" onClick={getlocation}>
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
