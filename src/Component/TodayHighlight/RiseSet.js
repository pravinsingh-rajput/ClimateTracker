import React from "react";
import "./RiseSet.css";
import Sun from "@mui/icons-material/WbSunnyOutlined";
// import Moon from "@mui/icons-material/NightlightOutlined";

const IconSize = {
  fontSize: "40px",
};

const RiseSet = (props) => {
  return (
    <div className="sunrise">
      <Sun style={IconSize} />
      <div className="sun_time">
        <p className="title">{props.SunTitle}</p>
        <p className="sunrise_time">{props.SunTime}</p>
      </div>
    </div>
  );
};

export default RiseSet;
