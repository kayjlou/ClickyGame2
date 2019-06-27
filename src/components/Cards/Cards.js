import React, { Component } from 'react'
import { Card, CardImg } from 'reactstrap'

const imageDiv = {
  width: '70%',
  margin: 'auto',
  border: '5px solid pink',
  textAlign: 'center'
}

class Cards extends Component {
  render() {
    const { images, handleClick } = this.props

    return (
      <>
        <div style={imageDiv}>
          {images.map(image =>
            <Card width="30%">
              <CardImg top width="20%"
                src={image} alt={image} onClick={handleClick}
              />
            </Card>
          )}
        </div>
      </>
    )
  }
}
export default Cards