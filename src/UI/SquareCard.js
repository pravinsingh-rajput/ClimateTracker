import React from "react";
import Card from "./Card";
import "./SquareCard.css";

const SquareCard = (props) => {
  return (
    <Card className="sqCard">
      <p className="card_title">{props.highlightTitle}</p>
      <div className="icon_details">
        <p>{props.icon}</p>
        <p className="icon_data">
          {props.highlightTitleData}
          <span className="parameter">{props.parameter}</span>
        </p>
      </div>
    </Card>
  );
};

export default SquareCard;
