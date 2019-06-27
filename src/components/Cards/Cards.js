import React, { Component } from 'react'

const imageDiv = {
  width: '70%',
  margin: 'auto',
  border: '5px solid pink',
  textAlign: 'center'
}
const images = {
  padding: '2px'
}
class Cards extends Component {
  render() {
    const { images, handleClick } = this.props

    return (
      <>
        <div style={imageDiv}>
          {images.map(image =>
            <button onClick={handleClick}>
              <img style= src={image} alt={image}></img>
            </button>
          )}
        </div>

      </>
    )
  }
}
export default Cards