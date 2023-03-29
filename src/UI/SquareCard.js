import React from "react";
import Card from "./Card";
import "./SquareCard.css";
import DropIcon from "@mui/icons-material/OpacityOutlined";

const SquareCard = (props) => {
  return (
    <Card className="sqCard">
      <p className="card_title">{props.highlightTitle}</p>
      <div className="icon_details">
        <DropIcon style={{ fontSize: "30px" }} />
        <p className="icon_data">
          {" "}
          {props.highlightTitleData}
          <span className="parameter">{props.parameter}</span>{" "}
        </p>
      </div>
    </Card>
  );
};

export default SquareCard;
