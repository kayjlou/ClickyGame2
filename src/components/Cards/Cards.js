import React, { Component } from 'react'
import './cards.css'


class Cards extends Component {
  render() {
    const { images, handleClick } = this.props

    return (
      <>
        <div id='imageDiv'>
          {images.map(image =>

            <img src={image} alt={image} className='images' onClick={handleClick}></img>

          )}
        </div>

      </>
    )
  }
}
export default Cards