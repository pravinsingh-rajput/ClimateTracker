import React from "react";
import "./Header.css";
import Search from "./Search";
import Icon from "@mui/icons-material/FilterDramaOutlined";
import CurrentIcon from "@mui/icons-material/MyLocationOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="appname">
        <Icon />
        <h3>Weather App</h3>
      </div>
      <div className="loctaion_container">
        <Search />
        <button className="current_location">
          <CurrentIcon />
          <p className="loc_label">Current Location</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
