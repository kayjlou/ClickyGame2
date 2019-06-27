import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumboStyle = {
  width: '70%',
  margin: 'auto',
  border: '5px solid pink',
  textAlign: 'center'
}

const Header = (props) => {

  return (
    <div>
      <Jumbotron fluid style={jumboStyle}>
        <Container fluid>
          <h1 className="display-3">Soccer Memory Game</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <p className='numberDiv'>  </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;