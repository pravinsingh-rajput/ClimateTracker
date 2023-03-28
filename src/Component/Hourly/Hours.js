import React from "react";
import Card from "../../UI/Card";
import "./Hours.css";
import Sun from "@mui/icons-material/LightModeRounded";

const Hours = () => {
  return (
    <Card className="hourly_card">
      <p className="hours">9 PM</p>
      <Sun style={{ fontSize: "30px" }} />
      <p className="hours_temp">
        5<sup>o</sup>
      </p>
    </Card>
  );
};

export default Hours;
