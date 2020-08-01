import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

import Persons from './containers/Persons';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
      </header>
      <ol>
        <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
      </ol>
      <Persons />
    </div>
  );
}

export default App;
