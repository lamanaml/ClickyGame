import React from "react";
// import { Link } from "react-router-dom";
import Alert from "../Alert";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({ score, topScore }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
  <div class="row">
    <div class="col-sm">
      Clicky Game
    </div>
    <div class="col-sm">
     <Alert style={{ opacity: 0 ? 1 : 0 }} type="success">
         You Guessed Correctly!
        </Alert>
    </div>
    <div class="col-sm">
      SCORE: {score} | TOP SCORE: {topScore}
    </div>
  </div>
</div>
      
    </nav>
  );
}

export default Navbar;
