import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Bear', age: 22, hobby: null },
      { name: 'Hung', age: 18, hobby: 'skating' },
      { name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
    ]
  })

  const switchNameHandler = () => {
    setPersonsState({ 
      persons: [
        { name: 'Barry Allen', age: 22, hobby: null },
        { name: 'Hung', age: 18, hobby: 'skating' },
        { name: 'Thuy', age: 20, hobby: 'ignoring Hung' },
      ],
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hello, I'm learning React again!</h1>
      <button onClick={switchNameHandler}>Switch Name!</button>
      {personsState.persons.map(person => 
        <Person name={person.name} age={person.age} hobby={person.hobby}/>
      )}
    </div>
  );
}

export default App;

