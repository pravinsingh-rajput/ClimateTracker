import React, { useContext } from "react";
import "./Now.css";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import ConditionIcon from "@mui/icons-material/WbCloudy";
import Card from "../../UI/Card";
import { MyContext } from "../Weatherapp";

const Now = () => {
  const { fetched_data } = useContext(MyContext);

  const date = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const currentdate = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(date);

  return (
    <div>
      <Card className="city_temp_container">
        <h2 className="box_label">Now</h2>
        <div className="seach_temp_data">
          <div className="temp_data">
            <div className="temp_container">
              <h3 className="show_temp">
                {fetched_data.temp} °<span className="celcius">C</span>
              </h3>
              <div className="climate_condition">{fetched_data.condition}</div>
            </div>
            <div className="condition_container">
              <ConditionIcon style={{ fontSize: "60px" }} />
            </div>
          </div>
          <div className="divider"> </div>
          <div>
            <div className="dateTime_container">
              <LocationIcon />
              <p className="date_time">{currentdate}</p>
            </div>
            <div className="loc_container">
              <CalendarIcon />
              <p className="detailed_loc">
                {fetched_data.city}, {fetched_data.country}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Now;
