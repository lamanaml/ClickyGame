import React, { Component } from "react";
import API from "../utilities/API";
// import Card from "../components/Card";
import ShowImages from "../components/ShowImages";
import Footer from "../components/Footer";

class Game extends Component {
  state = {
    images: [],
    match: true,
    score: 0,
    TopScore: 0,
  
  };

  // When the component mounts, load the next image
  componentDidMount() {
    this.loadImages();
  }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the dog, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next dog image
//     this.setState(newState);
//     this.loadImages();
//   };

  loadImages = () => {
    API.getImages()
      .then(res =>
      
        this.setState({
          images: res.data.hits 
          
        }) 
      )
      .catch(err => console.log(err));
  }
  
  render() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Clicky Game!</h1>
                <p class="lead"> Click on an image to earn points, but don't click on any more than once!</p>
            </div>

          <ShowImages images={this.state.images} />

            {/* // <Card images={this.state.images} handleBtnClick={this.handleBtnClick} /> */}
      
        </div>
        
    );
  }  <Footer />
}

export default Game;
