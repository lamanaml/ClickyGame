import React from "react";
import "./style.css";

function ShowImages(props) {
  return (
    <ul className="list-group search-images">
      {props.images.map(images => (
        <li key={images.largeImageURL} className="list-group-item">
          <img alt={images.tags} src={images.largeImageURL} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default ShowImages;
