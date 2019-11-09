import React from "react";
import "./style.css";

function ShowImages(props) {
  return (
    <ul className="list-group search-images">
      {props.images.map(images => (
        <li key={images} className="list-group-item">
          <img alt="Food Images" src={images} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default ShowImages;
