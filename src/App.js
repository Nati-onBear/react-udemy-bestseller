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
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    let persons = this.state.persons // or const?
    persons.splice(index, 1)
    this.setState({ persons: persons })  
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

  toggleVisibility = () => {
    this.state.showPersons === true 
      ? this.setState({ showPersons: false })
      : this.setState({ showPersons: true })
  }

  render() {
    const buttonStyle = {
      font: 'inherit',
      padding: '8px',
      backgroundColor: 'white',
      border: '2px solid lightgreen',
      borderRadius: '5px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        this.state.persons.map((person, index) => 
          <Person 
            name={person.name} 
            age={person.age} 
            hobby={person.hobby}
            click={() => this.deletePersonHandler(index)}
            changed={this.state.persons[1] === person ? this.changedNameHandler : null}
          />
        )
      ) 
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Hello, I'm learning React again!</h1>
        <button style={buttonStyle} onClick={this.toggleVisibility}>Toggle Persons' Visibility!</button>
        <div>
          {persons}
        </div>
        
      </div>
    );
    // const firstChild = React.createElement('header', {className: 'App-header'}, 
    //   React.createElement('img', {src:logo, className:'App-logo', alt:'logo'}))
    // const secondChild = React.createElement('h1', null, 'Hello, I\'m learning React again!')
    // return React.createElement('div', {className:'App'}, firstChild, secondChild )
  }
}

export default App;
