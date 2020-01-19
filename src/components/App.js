import React from 'react';
import '../styles/App.scss';
import { connect } from 'react-redux';

import Form from './Form';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Ghost from './Ghost';

const App = (props) =>{
  return (
    <div className="App">
      {props.cvvSelected === 'cvv' ? <CardBack /> : <CardFront />}
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
