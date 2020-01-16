import React from 'react';
import '../styles/App.css';
import Form from './Form';
import Card from './Card';


const App = () =>{
  return (
    <div className="App">
      <Card />
      <hr/>
      <Form />
    </div>
  );
}

export default App;
