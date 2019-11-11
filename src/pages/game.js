import React, { Component } from "react";
// import API from "../utilities/API";
// import Container from "../components/Container";
import ShowImages from "../components/ShowImages";
import Wrapper from "../components/Wrapper";
import images from "../images.json";

class Game extends Component {
  state = {
    images : images,
    click: [],
    topScore: 0,
    score: 0,
    message: "Ready to Play",
  };

   // componentDidMount() {
  //   this.shuffleImages();
  // }

   

//  // Function to reset the game state
//   resetGame = () => {
//       this.setState({
//           score: 0,
//           clicked: [],
//           message: "Click a card to begin!"
//       });
//       this.shuffleImages();
//   }

  // // Function for if the user loses the game
  // loseGame = () => {
  //     this.setState({
  //       message: "Loser!"
  //     });
  // }

  // // function for if the user wins the game
  // winGame = () => {
  //     this.setState({
  //       message: "Winner!"
  //     });
  // }

// onImageClick = (index) => {
//         const shuffleArr = this.shuffleImages(this.images);
//         this.setState({images: shuffleArr});
        
//         if(!this.state.click.includes(index)) {
//           this.state.click.push(index)
//           const { topScore, score } = this.state;
//           let newScore = score + 1;
//           const newTopScore = newScore > topScore ? newScore : topScore;
//           this.setState(()=> ({
//             score: newScore,
//             topScore: newTopScore,
//             message: "You guessed correctly"
//           }));
//           if (newScore === 12) {
//             this.setState({
//               score: 0,
//               message: "You Won!!! Click an Image to try again",
//               click: []
//             })
//           }
//         } else {
//           this.setState({
//             score: 0,
//             message: "Incorrect! GAME OVER!! Try again!",
//             click: []
//             // cards: this.resetData(cards)
//           })
//         }
//         this.shuffleImages();
//       }
    
// shuffleImages = food => {
//     for (let i = food.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [food[i], food[j]] = [food[j], food[i]];
//     }
//     this.setState({
//           images: this.shuffleArr
//   })
//   }

  render() {
    return (
     
        <div >
        < p class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Clicky Game!</h1>
          <p > Click on an image to earn points, but don't click on any more than once!</p>
        </p>
        
<Wrapper>
      { 
        images.map((food, i) => (
          <ShowImages
            key={food.id}
            id={i.id}
            image={food.largeImageURL}
            alt={food.tags}
            
          />
        ))}
      
    </Wrapper>



    <Wrapper>
      { 
        images.map((food, i) => (
          <ShowImages
            key={food.id}
            id={i.id}
            image={food.largeImageURL}
            alt={food.tags}
            
          />
        ))}
      
    </Wrapper>


     </div>  
    );
  } 
}


export default Game;
