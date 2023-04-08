import React, { useContext } from "react";
import "./TodaysHighlight.css";
import Card from "../../UI/Card";
import SquareCard from "../../UI/SquareCard";
import AirIcon from "@mui/icons-material/Air";
import AirType from "./AirType";
import { MyContext } from "../Weatherapp";
import RiseSet from "./RiseSet";

const IconSize = {
  fontSize: "40px",
};

const TodaysHighlight = () => {
  const { fetched_data, fetchedairdata } = useContext(MyContext);

  const unixconvert = (time) => {
    const timestamp = time;
    const date = new Date(timestamp * 1000);

    // const date = new Date(fetched_data.sunrise);
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat(
      navigator.language,
      options
    ).format(date);

    return formattedDate;
  };

  return (
    <Card className="highlight">
      <div className="today_highlight_container">
        <h3 className="highlight_label">Todays Highlight</h3>
        <div className="container">
          <div className="uppercontainer">
            <Card className="highlight_left_container">
              <div className="airlable_container">
                <div className="airlabel">Air Qulaity Index</div>
              </div>
              <div className="highlight_divider"> </div>
              <div className="airdata">
                <AirIcon style={IconSize} />
                <div className="airtype_container">
                  <AirType title={"PM25"} titleData={fetchedairdata.PM25} />
                  <AirType title={"SO2"} titleData={fetchedairdata.SO2} />
                  <AirType title={"NO2"} titleData={fetchedairdata.NO2} />
                  <AirType title={"O3"} titleData={fetchedairdata.O3} />
                </div>
              </div>
            </Card>
            <Card className="highlight_right_container">
              <div className="airlable_container">
                <div className="airlabel">Sunrise & Sunset</div>
              </div>
              <div className="highlight_divider"> </div>
              <div className="sunrise_sunset">
                <RiseSet
                  SunTitle={"Sunrise"}
                  SunTime={unixconvert(fetched_data.sunrise)}
                />
                <RiseSet
                  SunTitle={"Sunset"}
                  SunTime={unixconvert(fetched_data.sunset)}
                />
              </div>
            </Card>
          </div>
          <div className="lowercontainer">
            <SquareCard
              className="sqCard"
              highlightTitle={"Humidity"}
              highlightTitleData={fetched_data.humidity}
              parameter={"%"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Pressure"}
              highlightTitleData={fetched_data.pressure}
              parameter={"hPa"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Visibility"}
              highlightTitleData={fetched_data.visibility}
              parameter={"km"}
            ></SquareCard>
            <SquareCard
              className="sqCard"
              highlightTitle={"Feels Like"}
              highlightTitleData={fetched_data.feels_like}
              parameter={"°C"}
            ></SquareCard>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TodaysHighlight;
