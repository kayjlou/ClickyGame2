import React, { Component } from 'react'

class Cards extends Component {
  render() {
    const { images, handleClick } = this.props

    return (
      <>
        <div className='image-container'>
          {images.map(image =>
            <button onClick={handleClick}>
              <img src={image} alt={image}></img>
            </button>
          )}
        </div>

      </>
    )
  }
}
export default Cards