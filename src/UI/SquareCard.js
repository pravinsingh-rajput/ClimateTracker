import React from "react";
import Card from "./Card";
import "./SquareCard.css";
import DropIcon from "@mui/icons-material/OpacityOutlined";

const SquareCard = () => {
  return (
    <Card className="sqCard">
      <p className="card_title">Humidity</p>
      <div className="icon_details">
        <DropIcon style={{ fontSize: "30px" }} />
        <p className="icon_data"> 82%</p>
      </div>
    </Card>
  );
};

export default SquareCard;
