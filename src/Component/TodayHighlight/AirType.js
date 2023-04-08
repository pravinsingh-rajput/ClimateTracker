import React, { useContext } from "react";
import "./Airtype.css";
import { MyContext } from "../Weatherapp";

const AirType = (props) => {
  const { fetchedairdata } = useContext(MyContext);
  return (
    <div className="airtype">
      <p className="title">{props.title}</p>
      <p className="title_data">{props.titleData}</p>
    </div>
  );
};

export default AirType;
