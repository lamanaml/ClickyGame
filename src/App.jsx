import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={Game} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
