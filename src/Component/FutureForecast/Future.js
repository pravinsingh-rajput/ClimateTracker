import React from "react";
import "./Future.css";
import FutureIcon from "@mui/icons-material/Thunderstorm";

const Future = (props) => {
  return (
    <div className="future_data">
      <div className="icon_temp_container">
        <FutureIcon className="future_icon" />
        <p className="future_temp">{props.FutureTemp}</p>
      </div>
      <div className="future_date">{props.FutureDate}</div>
      <div className="future_day">{props.FutureDay}</div>
    </div>
  );
};

export default Future;
