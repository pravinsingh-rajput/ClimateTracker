import React from "react";
import "./TodaysHighlight.css";
import Card from "../../UI/Card";
import SquareCard from "../../UI/SquareCard";
import AirIcon from "@mui/icons-material/Air";
import AirType from "./AirType";
import Sun from "@mui/icons-material/WbSunnyOutlined";
import Moon from "@mui/icons-material/NightlightOutlined";

const IconSize = {
  fontSize: "40px",
};

const TodaysHighlight = () => {
  return (
    <Card className="highlight">
      <div className="today_highlight_container">
        <h3 className="highlight_label">Todays Highlight</h3>
        <div className="container">
          <div className="uppercontainer">
            <SquareCard className="left_container">
              <div className="airlable_container">
                <p className="airlabel">Air Qulaity Index</p>
                <p className="qualtity_type">Good</p>
              </div>
              <div className="highlight_divider"> </div>
              <div className="airdata">
                <AirIcon style={IconSize} />
                <div className="airtype_container">
                  <AirType />
                  <AirType />
                  <AirType />
                  <AirType />
                </div>
              </div>
            </SquareCard>
            <SquareCard className="right_container">
              <div className="airlable_container">
                <p className="airlabel">Sunrise & Sunset</p>
              </div>
              <div className="highlight_divider"> </div>
              <div className="sunrise_sunset">
                <div className="sunrise">
                  <Sun style={IconSize} />
                  <p className="sun_time">
                    <p className="title">Sunrise</p>
                    <p className="sunrise_time">6:46 AM</p>
                  </p>
                </div>
                <div className="sunrise">
                  <Moon style={IconSize} />
                  <p className="moon_time">
                    <p className="title">Sunrise</p>
                    <p className="sunset_time">6:46 AM</p>
                  </p>
                </div>
              </div>
            </SquareCard>
          </div>
          <div className="lowercontainer">
            <SquareCard></SquareCard>
            <SquareCard></SquareCard>
            <SquareCard></SquareCard>
            <SquareCard></SquareCard>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodaysHighlight;
