import React, { createContext, useEffect, useState } from "react";
import Now from "./Now/Now";
import Forecast from "./FutureForecast/Forecast";
import TodaysHighlight from "./TodayHighlight/TodaysHighlight";
import HourlyTemp from "./Hourly/HourlyTemp";
import Header from "./Header/Header";
import "./Weatherapp.css";
const MyContext = createContext();

const Weatherapp = (props) => {
  const [city, setCity] = useState("Mumbai");
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
  });
  const [fetchedairdata, setfetchedairdata] = useState({
    PM25: "",
    SO2: "",
    NO2: "",
    O3: "",
  });

  const databyname = (data) => {
    setfetched_data({
      ...fetched_data,
      temp: data.main.temp,
      condition: data.weather[0].main,
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
    });
  };
  const databyair = (data) => {
    setfetchedairdata({
      ...fetchedairdata,
      PM25: data.list[0].components.pm2_5,
      SO2: data.list[0].components.so2,
      NO2: data.list[0].components.no2,
      O3: data.list[0].components.o3,
    });
  };

  const fetchbyname = async () => {
    const citydata = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${props.apikey}`
    ).then((res) => res.json());

    const data = await citydata;
    databyname(data);

    // calling fetchairdata function here
    fetchairdata(data.coord.lat, data.coord.lon);
  };

  // Fetching air data
  const fetchairdata = async (lat, lon) => {
    const airdata = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${props.apikey}`
    ).then((res) => res.json());
    const data = await airdata;
    databyair(data);
  };

  // Call fetchbyname function on component mount
  useEffect(() => {
    fetchbyname();
  }, [city]);

  ///////////////////////////////////////////////////////////////////////////////////////

  const headerdata = (data) => {
    console.log(data);
    setCity(data);
  };

  return (
    <MyContext.Provider value={{ fetched_data, fetchedairdata }}>
      <div>
        <Header headerdata={headerdata} />
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
    </MyContext.Provider>
  );
};

export { MyContext };
export default Weatherapp;
