import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumboStyle = {
  width: '70%',
  margin: 'auto',
  marginTop: '20px',
  border: '5px solid gray',
  textAlign: 'center'
}

const Header = (props) => {

  return (
    <div>
      <Jumbotron fluid style={jumboStyle}>
        <Container fluid>
          <h1 className="display-3">Soccer Memory Game</h1>
          {/* <p className="lead"></p> */}
          <p className='numberDiv'>  </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;