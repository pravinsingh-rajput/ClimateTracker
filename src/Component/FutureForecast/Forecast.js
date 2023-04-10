import React from "react";
import Card from "../../UI/Card";
import "./Forecast.css";
import Future from "./Future";

const Forecast = () => {
  return (
    <Card>
      <div className="forecast">
        <Future date={"2023-04-09"} min={25} max={32} />
        <Future date={"2023-04-09"} min={25} max={32} />
        <Future date={"2023-04-09"} min={25} max={32} />
        <Future date={"2023-04-09"} min={25} max={32} />
      </div>
    </Card>
  );
};

export default Forecast;
