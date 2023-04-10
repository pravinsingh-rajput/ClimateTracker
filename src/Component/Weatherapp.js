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
    const data1 = await citydata;
    databyname(await data1);
    ////////////////////////////////
    ////////////////////////////////
    // calling fetchairdata function here
    fetchairdata(data1.coord.lat, data1.coord.lon);
  };

  // Fetching air data
  const fetchairdata = async (lat, lon) => {
    const airdata = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${props.apikey}`
    ).then((res) => res.json());
    const data = await airdata;
    databyair(await data);
    console.log(fetchedairdata);
  };

  /////////////////////////////////////////////////////////////////////////////////////

  const [timetemp, setTimeTemp] = useState({
    temp1: "",
    temp2: "",
    temp3: "",
    temp4: "",
    temp5: "",
    temp6: "",
    temp7: "",
    temp8: "",
  });

  const updateTimetemp = (data) => {
    setTimeTemp({
      temp1: data[0].main.temp,
      temp2: data[1].main.temp,
      temp3: data[2].main.temp,
      temp4: data[3].main.temp,
      temp5: data[4].main.temp,
      temp6: data[5].main.temp,
      temp7: data[6].main.temp,
      temp8: data[7].main.temp,
    });
  };

  const fetchtimetemp = async () => {
    const futuretemp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${props.apikey}&units=metric`
    ).then((res) => res.json());
    const data2 = await futuretemp.list;
    updateTimetemp(data2);
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    fetchbyname();
    fetchtimetemp();
  }, [city]);

  const headerdata = (data) => {
    setCity(data);
  };

  return (
    <MyContext.Provider value={{ fetched_data, fetchedairdata, timetemp }}>
      <div>
        <Header headerdata={headerdata} />
        <div className="main_section">
          <div className="left_container">
            <Now className="now" />
            <h4 className="forecast_label future_label">5 Day Forecast</h4>
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
