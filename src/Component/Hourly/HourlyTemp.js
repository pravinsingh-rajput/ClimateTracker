import React from "react";
import Hours from "./Hours";
import "./HourlyTemp.css";

const HourlyTemp = () => {
  return (
    <div className="hours_temp_container">
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"09 PM"}
        temperature={"25"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"12 AM"}
        temperature={"23"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"03 AM"}
        temperature={"30"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunrise.png"}
        time={"06 AM"}
        temperature={"28"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"09 AM"}
        temperature={"25"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"12 PM"}
        temperature={"24"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"03 PM"}
        temperature={"29"}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunset.png"}
        time={"06 PM"}
        temperature={"25"}
      ></Hours>
    </div>
  );
};

export default HourlyTemp;
