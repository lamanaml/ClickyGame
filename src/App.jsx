import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import ShowImages from "./components/ShowImages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



// Main click handler function
  handleSaveClick = id => {
  
    const imageClicked = images.filter(images => images.key === key);

    // If the images isn't clicked...
    if (!imagesClicked[0].clicked) {
      // ...set it to now be clicked
      imagesClicked[0].clicked = true;
      // ...call this function to register the correct guess
      this.handleCorrectClick();
      // ...add the bouncy animation for correct guess
      this.toggleAnimation(true);

      // ... randomize character imagess
      this.randomizeCharacters(images);

      this.setState({ images });
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
    const images = this.state.imagess;
    for (let i = 0; i < images.length; i++) {
      images[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/" component={Game} />
        {/* </Wrapper> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
