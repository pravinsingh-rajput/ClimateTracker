import React from "react";
import "./Now.css";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import ConditionIcon from "@mui/icons-material/WbCloudy";
import Card from "../../UI/Card";

const Now = () => {
  return (
    <div>
      <Card className="city_temp_container">
        <h2 className="box_label">Now</h2>
        <div className="seach_temp_data">
          <div className="temp_data">
            <div className="temp_container">
              <h1 className="show_temp">
                5 °<span className="celcius">C</span>
              </h1>
              <div className="climate_condition">Broken Cloud</div>
            </div>
            <div className="condition_container">
              <ConditionIcon style={{ fontSize: "60px" }} />
            </div>
          </div>
          <div className="divider"> </div>
          <div>
            <div className="dateTime_container">
              <LocationIcon />
              <p className="date_time">Wednesday, 1 March</p>
            </div>
            <div className="loc_container">
              <CalendarIcon />
              <p className="detailed_loc">Mumbai, India</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Now;
