import React from "react";
import "./style.css";


function ShowImages(props) {
  return (

      <button>  
        <img 
          src={props.image} 
          onClick={()=> props.onImageClick(props.id)}  
          alt={props.id} /> 
      </button>

  );
}


export default ShowImages;


