import React from "react";
import "./style.css";
import ImgBtn from "../ImgBtn";

/
function ShowImages(props) {
  return (
    <div class="container">
       
      {props.images.map((images, i) => (
        <span key={i} >
          <img alt={images.tags} src={images.largeImageURL} />
        </span>
         
      />
      ))}
     

    </div>
  );
}

export default ShowImages;
