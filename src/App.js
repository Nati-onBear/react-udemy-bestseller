import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Blog from './containers/Blog/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <h1>Hello, I'm learning React again!</h1> */}
      <Blog />
    </div>
  );
}

export default App;
