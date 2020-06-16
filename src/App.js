import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bear', age: 22, hobby: null },
      { name: 'Hung', age: 18, hobby: 'skating' },
      { name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Hello, I'm learning React again!</h1>
        <button>Switch Name!</button>
        {this.state.persons.map(person => 
          <Person name={person.name} age={person.age} hobby={person.hobby}/>
        )}
      </div>
    );
    // const firstChild = React.createElement('header', {className: 'App-header'}, 
    //   React.createElement('img', {src:logo, className:'App-logo', alt:'logo'}))
    // const secondChild = React.createElement('h1', null, 'Hello, I\'m learning React again!')
    // return React.createElement('div', {className:'App'}, firstChild, secondChild )
  }
}

export default App;
