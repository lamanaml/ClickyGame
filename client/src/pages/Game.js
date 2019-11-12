
import React, { Component } from "react";
// import API from "../utilities/API";
// import Container from "../components/Container";
import ShowImages from "../components/ShowImages";
import Wrapper from "../components/Wrapper";
import images from "../images.json";
import Navbar from "../components/Navbar";
import "../App.css";
// import Example from "../components/Example";

class Game extends Component {
    constructor(props) {
    super(props);
    this.state = {
      images : images,
      click: [],
      topScore: 0,
      score: 0,
      message: "Select an image to begin.",
    };
  };

   componentDidMount() {
    this.shuffleImages();
  }

   

 // Function to reset the game state
  resetGame = () => {
      this.setState({
          score: 0,
          click: [],
          message: "Click an to begin!"
      });
      this.shuffleImages();
  }

  // Function for if the user loses the game
  loseGame = () => {
      this.setState({
        message: "You lost the game!"
      });
  }

  // function for if the user wins the game
  winGame = () => {
      this.setState({
        message: "You won the game!"
      });

  }

onImageClick = (id) => {
  
    if (this.state.click.includes(id)) {
        console.log(id)
        console.log("lose game")
          this.loseGame();
          this.setState({
            click: [],
            score: 0
          });
      } 
      else {
          this.state.click.push(id);
          let score = this.state.score + 1;
          let topScore = score > this.state.topScore ? score : this.state.score;
          this.setState({
              score,
              topScore,
              message: "You guessed correctly!"
          });
          if (this.state.click.length === 12) {
              this.winGame();
              this.setState({
                click: [],
                score: 0
              });
          }
          this.shuffleImages();
      }
  }


shuffleImages = () => {
   let shuffled = this.state.images;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.setState({ images: shuffled  })
  }

  render() {
    return (


      
        <div >

   {/* <Example /> */}

           <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        < p class="jumbotron jumbotron-fluid background1">
          <h1 class="display-4 ">Clicky Game!</h1>
          <p class="display-5 "> Click on an image to earn points, but don't click on any more than once!</p>
        </p>
       
<Wrapper>
   
      { this.state.images.map((food) =>{
          return( 
          <ShowImages
            key={food.id}
            id={food.id}
            image={food.largeImageURL}
            alt={food.tags}
            onImageClick={this.onImageClick.bind(this)}
            
          />
        )}
        )
      }
    
      
    </Wrapper>
  
  </div>  

     )}
}

export default Game;

