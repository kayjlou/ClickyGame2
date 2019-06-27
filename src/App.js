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
    message: `Click any image to get started! Just don't click them twice!!`
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

    const clickedImages = this.state.clickedImages


    if (clickedImages.indexOf(clickedImg === -1)) {
      this.setState({
        clickedImages: [clickedImages, clickedImg],
        message: `Keep going! `,
        score: this.state.score + 1,
        guesses: this.state.guesses + 1

      })
      console.log(this.state.clickedImages)
      console.log("keep going")



    } else if (clickedImages.indexOf(clickedImg > -1)) {
      console.log("you fail")
      this.setState({
        clickedImages: [],
        message: `You lost!!! `,
        score: 0,
        guesses: 0

      })
    }
  }




  render() {
    return (
      <>
        <Header message={this.state.message} score={this.state.score} guesses={this.state.guesses} />
        <h3>Guesses: {this.state.guesses}</h3>
        <h3>Score: {this.state.score}</h3>
        <Cards
          images={this.state.imgArray}
          handleClick={this.handleClick} />
      </>

    )
  }
}

export default App;
