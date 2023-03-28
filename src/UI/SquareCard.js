import React from "react";
import "./SquareCard.css";

const SquareCard = (props) => {
  const squareclass = "square " + props.className;

  return <div className={squareclass}>{props.children}</div>;
};

export default SquareCard;
