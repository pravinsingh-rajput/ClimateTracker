import React from "react";
import Card from "../../UI/Card";
import "./Hours.css";
import Sun from "@mui/icons-material/LightModeRounded";

const Hours = (props) => {
  return (
    <Card className="hourly_card">
      <div className="hours">{props.time}</div>
      <Sun style={{ fontSize: "30px" }} />
      <div className="hours_temp">
        {props.temperature}
        <sup>o</sup>
      </div>
    </Card>
  );
};

export default Hours;
