import React from "react";
import "./config.scss";

const PokeButton = (props) => {
  return (
    <butto
      className="poke-button"
      onClick={props.onclick}
      style={{ color: props.color, backgroundColor: props.backgroundColor }}
    >
      {props.text}
    </butto>
  );
};

export default PokeButton;
