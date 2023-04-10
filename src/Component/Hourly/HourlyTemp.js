import React, { useContext, useState } from "react";
import Hours from "./Hours";
import "./HourlyTemp.css";
import { MyContext } from "../Weatherapp";

const HourlyTemp = (props) => {
  const { timetemp } = useContext(MyContext);

  return (
    <div className="hours_temp_container">
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"03 PM"}
        temperature={timetemp.temp1}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunset.png"}
        time={"06 PM"}
        temperature={timetemp.temp2}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"09 PM"}
        temperature={timetemp.temp3}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"12 AM"}
        temperature={timetemp.temp4}
      ></Hours>
      <Hours
        imgsrc={"/Assets/moon.png"}
        time={"03 AM"}
        temperature={timetemp.temp5}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sunrise.png"}
        time={"06 AM"}
        temperature={timetemp.temp6}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"09 AM"}
        temperature={timetemp.temp7}
      ></Hours>
      <Hours
        imgsrc={"/Assets/sun.png"}
        time={"12 PM"}
        temperature={timetemp.temp8}
      ></Hours>
    </div>
  );
};

export default HourlyTemp;
