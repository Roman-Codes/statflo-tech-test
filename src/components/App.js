import React from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';

import Form from './Form';
import CardFront from './CardFront';
import CardBack from './CardBack';

const App = (props) =>{
  return (
    <div className="App">
      {props.cvvSelected ? <CardBack /> : <CardFront />}
      <hr/>
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
