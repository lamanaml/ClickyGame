import React from "react";
import "./style.css";


function ShowImages(props) {
  return (

      <button>  
        <img 
          src={props.image} 
          onClick={()=> props.onImageClick(props.id)}  
          alt="" /> 
      </button>

  );
}


export default ShowImages;


