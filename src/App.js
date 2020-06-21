import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  state = {
    persons: [
      { id: 'A1', name: 'Bear', age: 22, hobby: null },
      { id: 'A2', name: 'Hung', age: 18, hobby: 'skating' },
      { id: 'B3', name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
    ],
    showPersons: false,
    pLength: 0,
    pTexts: []
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

  onInputChange = (event) => {
    let pTexts = event.target.value.split('')
    this.setState({ pLength: event.target.value.length, pTexts: pTexts })
  }

  onCharClick = (index) => {
    let pTexts = [...this.state.pTexts]
    pTexts.splice(index, 1)
    this.setState({ pTexts: pTexts })
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
    
    let pTexts = this.state.pTexts.map((text, index) =>
      <Char 
        key={index}
        letter={text}
        click={() => this.onCharClick(index)}
      />
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Hello, I'm learning React again!</h1>
        <h3>Section 4</h3>
        <button style={buttonStyle} onClick={this.toggleVisibility}>Toggle Persons' Visibility!</button>
        <div>
          {persons}
        </div>
        <h3>Assignment 2</h3>
        <div>
          <input type='textarea' value={this.state.pTexts.join('')} onChange={this.onInputChange}/>
          <Validation length={this.state.pLength}/>
          {pTexts}
        </div>
      </div>
    );
  }
}

export default App;
