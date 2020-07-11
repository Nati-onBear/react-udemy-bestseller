import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass';

const initialState = [
  { id: 'A1', name: 'Bear', age: 22, hobby: null },
  { id: 'A2', name: 'Hung', age: 18, hobby: 'skating' },
  { id: 'B3', name: 'Thuy', age: 20, hobby: 'ignoring Hung' }
]

class App extends Component {
  state = {
    persons: Array.from(initialState),
    showPersons: false,
    showCockpit: false
  }

  componentDidMount = () => {
    this.setState({ showPersons: true, showCockpit: true })
  }

  deletePersonHandler = index => {
    let persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({ persons: [...persons] })  
  }

  changedNameHandler = (event, index) => {
    // To change the name of the person
    const originalPersons = [...this.state.persons]
    //let changedPerson = originalPersons.splice(index, 1).shift()
    let changedPerson = { ...originalPersons[index] }
    changedPerson.name = event.target.value
    // To get the updated state
    let updatedPersons = [...this.state.persons]
    //updatedPersons.splice(index, 1, changedPerson)
    updatedPersons[index] = changedPerson
    this.setState({ persons: [...updatedPersons] })
  }

  toggleVisibility = () => {
    this.state.showPersons === true 
      ? this.setState({ showPersons: false })
      : this.setState({ showPersons: true })
  }

  toggleCockpit = () => {
    this.state.showCockpit === true
      ? this.setState({ showCockpit: false })
      : this.setState({ showCockpit: true })
  }

  resetState = () => {
    this.setState({
      persons: [...initialState],
      showPersons: true
    })
  }

  render() {
    return (
      <Auxiliary>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={this.toggleCockpit}>Toggle Cockpit</button>
        {this.state.showCockpit && <Cockpit 
          title={this.props.appTitle}
          personsNumber={this.state.persons.length}
          showPersons={this.state.showPersons}
          toggleVisibility={this.toggleVisibility}
          resetState={this.resetState}
        />}
        
        {
          this.state.showPersons && <Persons 
            persons={this.state.persons} 
            deletePersonHandler={this.deletePersonHandler}
            changedNameHandler={this.changedNameHandler}
          />
        }
      </Auxiliary>        
    );
  }
}

export default withClass(App, 'App');
