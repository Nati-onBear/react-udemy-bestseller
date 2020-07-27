import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Counter from './containers/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello, I'm learning React again!</h1>
      <Counter />
    </div>
  );
}

export default App;
