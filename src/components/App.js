import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import { connect } from 'react-redux';
import ReactCardFlip from 'react-card-flip';

import Form from './Form';
import CardFront from './CardFront';
import CardBack from './CardBack';

const App = ({ cvvSelected }) =>{
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (arg) => {
    arg === 'cvv' ? setFlipped(true) : setFlipped (false);
  }

  useEffect(()=>{
    handleFlip(cvvSelected);
  }, [cvvSelected]);


  return (
    <div className="App">
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <CardFront key="front"/>
        <CardBack key="back"/>
      </ReactCardFlip>
      <Form />
    </div>
  );
}

const mapStateToProps = (state) =>{
  return({
    cvvSelected:state.cvvSelected
  })
}

export default connect(mapStateToProps)(App);
