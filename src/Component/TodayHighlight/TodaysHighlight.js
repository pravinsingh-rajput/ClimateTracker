import React from "react";
import "./TodaysHighlight.css";
import Card from "../../UI/Card";
import SquareCard from "../../UI/SquareCard";
import AirIcon from "@mui/icons-material/Air";
import AirType from "./AirType";
// import Sun from "@mui/icons-material/WbSunnyOutlined";
// import Moon from "@mui/icons-material/NightlightOutlined";
import RiseSet from "./RiseSet";

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
            <Card className="highlight_left_container">
              <div className="airlable_container">
                <p className="airlabel">Air Qulaity Index</p>
                <p className="qualtity_type">Good</p>
              </div>
              <div className="highlight_divider"> </div>
              <div className="airdata">
                <AirIcon style={IconSize} />
                <div className="airtype_container">
                  <AirType title={"PM25"} titleData={"3.90"} />
                  <AirType title={"SO2"} titleData={"7.75"} />
                  <AirType title={"NO2"} titleData={"33.6"} />
                  <AirType title={"O3"} titleData={"38.6"} />
                </div>
              </div>
            </Card>
            <Card className="highlight_right_container">
              <div className="airlable_container">
                <p className="airlabel">Sunrise & Sunset</p>
              </div>
              <div className="highlight_divider"> </div>
              <div className="sunrise_sunset">
                <RiseSet SunTitle={"Sunrise"} SunTime={"6:46 AM"} />
                <RiseSet SunTitle={"Sunset"} SunTime={"5:59 PM"} />
              </div>
            </Card>
          </div>
          <div className="lowercontainer">
            <SquareCard
              className="sqCard"
              highlightTitle={"Humidity"}
              highlightTitleData={"82"}
              parameter={"%"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Pressure"}
              highlightTitleData={"1025"}
              parameter={"hPa"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Visibility"}
              highlightTitleData={"10"}
              parameter={"km"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Feels Like"}
              highlightTitleData={"2"}
              parameter={"°C"}
            ></SquareCard>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodaysHighlight;
