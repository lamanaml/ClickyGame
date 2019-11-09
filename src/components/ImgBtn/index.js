import React from "./node_modules/react";
import "./style.css";

function ImgBtn(props) {
  return (
    <button onClick={props.onClick} className={`img-btn ${props["data-value"]}`} {...props} />
  );
}

export default ImgBtn;
