import React from "react";
import Card from "../../UI/Card";
import "./Hours.css";
import Sun from "@mui/icons-material/LightModeRounded";

const Hours = (props) => {
  return (
    <Card className="hourly_card">
      <p className="hours">{props.time}</p>
      <Sun style={{ fontSize: "30px" }} />
      <p className="hours_temp">
        {props.temperature}
        <sup>o</sup>
      </p>
    </Card>
  );
};

export default Hours;
