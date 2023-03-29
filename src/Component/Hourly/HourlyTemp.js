import React from "react";
import Hours from "./Hours";
import "./HourlyTemp.css";

const HourlyTemp = () => {
  return (
    <div className="hours_temp_container">
      <Hours time={"09 PM"} temperature={"25"}></Hours>
      <Hours time={"12 AM"} temperature={"23"}></Hours>
      <Hours time={"03 AM"} temperature={"30"}></Hours>
      <Hours time={"06 AM"} temperature={"28"}></Hours>
      <Hours time={"09 AM"} temperature={"25"}></Hours>
      <Hours time={"12 PM"} temperature={"24"}></Hours>
      <Hours time={"03 PM"} temperature={"29"}></Hours>
      <Hours time={"06 PM"} temperature={"25"}></Hours>
    </div>
  );
};

export default HourlyTemp;
