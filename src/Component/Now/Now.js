import React from "react";
import "./Now.css";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import ConditionIcon from "@mui/icons-material/WbCloudy";
import Card from "../../UI/Card";

const Now = () => {
  return (
    <div>
      <Card className="City_temp_container">
        <h2 className="box_label">Now</h2>
        <div className="seach_temp_data">
          <div className="temp_data">
            <div className="temp_container">
              <h1 className="show_temp">
                5 <sup className="degree">o</sup>
                <span className="celcius">C</span>
              </h1>
              <p className="climate_condition">Broken Cloud</p>
            </div>
            <div className="condition_container">
              <ConditionIcon style={{ fontSize: "60px" }} />
            </div>
          </div>
          <div className="divider"> </div>
          <div>
            <p className="dateTime_container">
              <LocationIcon />
              <p className="date_time">Wednesday, 1 March</p>
            </p>
            <p>
              <CalendarIcon className="loc_container" />
              <p className="detailed_loc">Mumbai, India</p>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Now;
