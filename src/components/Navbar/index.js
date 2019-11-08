import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
  <div class="row">
    <div class="col-sm">
      Clicky Game
    </div>
    <div class="col-sm">
      You guessed incorrectly!
    </div>
    <div class="col-sm">
      Score: 0 | Top Score: 7
    </div>
  </div>
</div>
      
    </nav>
  );
}

export default Navbar;
