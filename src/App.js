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

  componentDidMount = () => {
    this.setState({ showPersons: true })
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

  resetState = () => {
    this.setState({
      persons: [
        { id: 'A1', name: 'Bear', age: 22, hobby: null },
        { id: 'A2', name: 'Hung', age: 18, hobby: 'skating' },
        { id: 'B3', name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
      ],
      showPersons: true
    })
  }

  render() {
    const style = {
      toggleStyle: {
        font: 'inherit',
        padding: '8px',
        backgroundColor: '#13EBA2',
        color: 'white',
        border: '2px solid lightgray',
        borderRadius: '5px',
        cursor: 'pointer'
      },
      resetStyle: {
        font: 'inherit',
        marginLeft: '10px',
        padding: '8px',
        backgroundColor: '#13EBA2',
        color: 'white',
        border: '2px solid lightgray',
        borderRadius: '5px',
        cursor: 'pointer'
      }
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
      style.toggleStyle.backgroundColor = '#F1202B'
    }

    const classes = []
    this.state.persons.length <= 2 && classes.push('red')
    this.state.persons.length <= 1 && classes.push('bold')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Hello, I'm learning React again!</h1>
        <p className={classes.join(' ')}>I hope this course will help me @@</p>
        <button style={style.toggleStyle} onClick={this.toggleVisibility}>Toggle People's Visibility!</button>
        <button style={style.resetStyle} onClick={this.resetState}>Reset People</button>
        {persons}
      </div>
    );
  }
}

export default App;
