import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
      </header>
      
    </div>
  );
}

export default App;
