import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container">
       <div class="row">
          <div className="col-sm-4">Clicky Game </div>
          <div className="col-sm-4"> {props.message} </div>
          <div className="col-sm-4"> SCORE: {props.score} | TOP SCORE: {props.topScore} </div>
        </div >
      </div >
    </nav>
  );
}

export default Navbar;
