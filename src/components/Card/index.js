import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.images ? `url(${props.images})` : "none"
      }}
    >
      {!props.images && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      {/* <CardBtn
        style={{ opacity: props.images ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        style={{ opacity: props.images ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      /> */}
    </div>
  );
}

export default Card;
