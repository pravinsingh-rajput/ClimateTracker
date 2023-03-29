import React from "react";
import Card from "../../UI/Card";
import "./Forecast.css";
import Future from "./Future";

const Forecast = () => {
  return (
    <Card classname="forecast">
      <Future FutureTemp={"24°"} FutureDate={"02 Mar"} FutureDay={"Mon"} />
      <Future FutureTemp={"22°"} FutureDate={"03 Mar"} FutureDay={"Tue"} />
      <Future FutureTemp={"30°"} FutureDate={"04 Mar"} FutureDay={"Wed"} />
      <Future FutureTemp={"27°"} FutureDate={"05 Mar"} FutureDay={"Thu"} />
      <Future FutureTemp={"28°"} FutureDate={"06 Mar"} FutureDay={"Fri"} />
    </Card>
  );
};

export default Forecast;
