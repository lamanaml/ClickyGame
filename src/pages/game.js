import React, { Component } from "react";
import API from "../utilities/API";
// import Card from "../components/Card";
import ShowImages from "../components/ShowImages";


class Game extends Component {
  state = {
    images: [],
    match: true,
    imgIdOne: "",
    imgIdTwo: "",
    score: 0,
    topScore: 0,
  
  };

// Main click handler function
  handleSaveClick = id => {
    // Variable to hold the tiles state.
    const tilez = this.state.tiles;
    // Search through character tiles to find the one that matches the clicked id.
    const tileClicked = tilez.filter(tile => tile.id === id);

    // If the tile isn't clicked...
    if (!tileClicked[0].clicked) {
      // ...set it to now be clicked
      tileClicked[0].clicked = true;
      // ...call this function to register the correct guess
      this.handleCorrectClick();
      // ...add the bouncy animation for correct guess
      this.toggleAnimation(true);

      // ... randomize character tiles
      this.randomizeCharacters(tilez);

      this.setState({ tilez });
    } else {
      this.handleIncorrectClick();
      this.toggleAnimation(false);
    }
  };

  // Function to randomize the characters
  randomizeCharacters = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handler for correct guesses/clicks
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "CONGRATS! YOU WIN!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "YOU GUESSED CORRECTLY!",
        messageClass: "correct"
      });
    }
  };

  // Handler for incorrect guesses/clicks
  handleIncorrectClick = () => {
    this.setState({
      message: "INCORRECT. PLAY AGAIN?",
      isGuessCorrect: false
    });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  };

  // Resets the game
  resetGame = id => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  // When the component mounts, load the next image
  componentDidMount() {
    this.loadImages();
  }

 handleBtnClick = event => {
 // Get the data-value of the clicked button
  const btnType = event.target.attributes.getNamedItem("data-value").value;
// Clone this.state to the newState object
 // We'll modify this object and use it to set our component's state
   const newState = { ...this.state };

   if (btnType === "pick") {
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
  };
   }
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
    const { score, tiles, topScore } = this.state;
    return (
        <div >

        < p class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Clicky Game!</h1>
                <p class="lead"> Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </p>

          <ShowImages images={this.state.images} />

            {/* handleBtnClick={this.handleBtnClick} /> */}
    
 
        </div>
         
        
    );
  } 
}
 

export default Game;
