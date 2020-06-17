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

  switchNameHandler = newName => {
    this.setState({ 
      persons: [
        { name: newName, age: 22, hobby: null },
        { name: 'Hung', age: 18, hobby: 'skating' },
        { name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
      ],
    })
  }

  changedNameHandler = event => {
    this.setState({ 
      persons: [
        { name: 'Bear', age: 22, hobby: null },
        { name: event.target.value, age: 18, hobby: 'skating' },
        { name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Hello, I'm learning React again!</h1>
        <button onClick={() => this.switchNameHandler('Barry Allen!!')}>Switch Name!</button>
        {this.state.persons.map(person => 
          <Person 
            name={person.name} 
            age={person.age} 
            hobby={person.hobby}
            click={this.state.persons[0] ? this.switchNameHandler.bind(this, 'Beary!!!') : null}
            changed={this.state.persons[1] === person ? this.changedNameHandler : null}
          />
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
