import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'A1', name: 'Bear', age: 22, hobby: null },
      { id: 'A2', name: 'Hung', age: 18, hobby: 'skating' },
      { id: 'B3', name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
    ],
    showPersons: false
  }

  deletePersonHandler = index => {
    let persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons: persons })  
  }

  changedNameHandler = (event, index) => {
    // To change the name of the person
    const originalPersons = [...this.state.persons]
    //let changedPerson = originalPersons.splice(index, 1).shift()
    let changedPerson = originalPersons[index]
    changedPerson.name = event.target.value
    // To get the updated state
    let updatedPersons = [...this.state.persons]
    //updatedPersons.splice(index, 1, changedPerson)
    updatedPersons[index] = changedPerson
    this.setState({ persons: updatedPersons })
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
            key={person.id}
            name={person.name} 
            age={person.age} 
            hobby={person.hobby}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.changedNameHandler(event, index)}
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
  }
}

export default App;
