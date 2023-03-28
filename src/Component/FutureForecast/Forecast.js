import React from "react";
import Card from "../../UI/Card";
import "./Forecast.css";
import Future from "./Future";

const Forecast = () => {
  return (
    <Card classname="forecast">
      <Future />
      <Future />
      <Future />
      <Future />
      <Future />
    </Card>
  );
};

export default Forecast;
