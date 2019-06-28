import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import soccer from './assets/images/soccer.png'
import Ronaldo from './assets/images/Ronaldo.jpeg'
import Messi from './assets/images/Messi.jpeg'
import Neymar from './assets/images/Neymar.jpeg'
import Mbappe from './assets/images/Mbappe.jpeg'
import Beckham from './assets/images/Beckham.jpeg'
import Donovan from './assets/images/Donovan.jpeg'
import Suarez from './assets/images/Suarez.jpeg'
import Bale from './assets/images/Bale.jpeg'
import Salah from './assets/images/Salah.jpeg'
import Zlatan from './assets/images/Zlatan.jpeg'
import Ronaldinho from './assets/images/Ronaldinho.jpeg'
import Chicharito from './assets/images/Chicharito.jpeg'

class App extends Component {
  state = {
    imgArray: [
      Donovan,
      Suarez,
      Bale,
      Salah,
      Zlatan,
      Ronaldinho,
      Chicharito,
      Beckham,
      Mbappe,
      Neymar,
      Messi,
      Ronaldo
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
          <h3>Top Score: {this.state.topScore}</h3>
          <h4>Guesses: {this.state.guesses} Score: {this.state.score}</h4>
          <h4>{this.state.message}</h4>
        </div>
        <Cards
          images={this.state.imgArray}
          handleClick={this.handleClick} />
        <img className='soccer' src={soccer} alt='ball'></img>
      </>

    )
  }
}

export default App;
