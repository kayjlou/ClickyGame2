import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'

class App extends Component {
  state = {
    imgArray: [
      "https://s5.postimg.cc/cxo14dtgj/Puppy1.jpg",
      "https://s5.postimg.cc/a3kvqym5f/Puppy2.jpg",
      "https://s5.postimg.cc/42n6tvcdv/Puppy3.jpg",
      "https://s5.postimg.cc/qrcdtg1hf/Puppy4.jpg"
    ],
    clickedImages: [],
    guesses: 0,
    score: 0,
    message: `Click any image to get started! Just don't click them twice!!`,
    topScore: 0
  }

  //Shuffles array
  shuffle = (array) => {
    let currentIndex = array.length
    let tempValue, randomIndex
    //While there remains elements to shuffle
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      //Subtract one as arrays start at 0 index
      currentIndex -= 1
      //Swap with current element
      tempValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = tempValue
    }
    return array
  }

  //Function to handle click
  handleClick = event => {
    //Shuffles images
    const imgArray = this.state.imgArray
    this.shuffle(imgArray)
    this.setState({ imgArray })
    //Set guessedimage array copy to check if it has been guessed
    let clickedImg = event.target.src
    console.log(`Clicked image is  + ${clickedImg}`)

    // const clickedImages = this.state.clickedImages
    this.checkArray(clickedImg)


  }

  checkArray = image => {
    if (this.state.clickedImages.indexOf(image) === -1) {
      this.setState({
        clickedImages: [...this.state.clickedImages, image],
        message: `Keep going! `,
        score: this.state.score + 1,
        guesses: this.state.guesses + 1,
        topScore: this.state.score >= this.state.topScore ? this.state.score : this.state.topScore

      })
    } else {
      console.log("you fail")
      this.setState({
        clickedImages: [],
        message: `You lost!!! Click to start again!!`,
        score: 0,
        guesses: 0,
        topScore: this.state.score >= this.state.topScore ? this.state.score : this.state.topScore
      })
    }
  }




  render() {
    return (
      <>
        <Header />
        <div className='scoreDiv'>
          <h3>Guesses: {this.state.guesses}</h3>
          <h3>Score: {this.state.score}</h3>
          <h3>{this.state.message}</h3>
          <h3>Top Score: {this.state.topScore}</h3>
        </div>
        <Cards
          images={this.state.imgArray}
          handleClick={this.handleClick} />
      </>

    )
  }
}

export default App;
