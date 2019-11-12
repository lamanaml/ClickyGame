import React from "react";
import "./style.css";


function ShowImages(props) {
  return (

  <div > 
    <img src={props.image}  
      onClick={()=> props.onImageClick(props.id)}  
      alt={props.id}/>
  </div>

  );
}


export default ShowImages;


