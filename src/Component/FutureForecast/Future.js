import React from "react";
import "./Future.css";
import FutureIcon from "@mui/icons-material/Thunderstorm";

const Future = () => {
  return (
    <div className="future_data">
      <p>
        <FutureIcon className="future_icon" />
        <p className="future_temp">
          14<sup>o</sup>
        </p>
      </p>
      <p className="future_date">2 Mar</p>
      <p className="future_day">Monday</p>
    </div>
  );
};

export default Future;
