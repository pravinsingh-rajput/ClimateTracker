import React from "react";
import "./Future.css";
import FutureIcon from "@mui/icons-material/Thunderstorm";

const Future = (props) => {
  return (
    <div className="future_data">
      <p>
        <FutureIcon className="future_icon" />
        <p className="future_temp">{props.FutureTemp}</p>
      </p>
      <p className="future_date">{props.FutureDate}</p>
      <p className="future_day">{props.FutureDay}</p>
    </div>
  );
};

export default Future;
