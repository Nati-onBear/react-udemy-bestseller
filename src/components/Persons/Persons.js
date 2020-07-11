import React, { Component } from 'react'
import Person from './Person/Person'

export default class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate')
    if (nextProps.persons !== this.props.persons)
      return true
    return false
  }

  render() {
    const { persons, deletePersonHandler, changedNameHandler } = this.props
    console.log('[Persons.js] rendering')
    return (
      persons.map((person, index) => 
        <Person 
          key={person.id}
          name={person.name}
          age={person.age} 
          hobby={person.hobby}
          click={() => deletePersonHandler(index)}
          changed={(event) => changedNameHandler(event, index)}
        />
      )
    )
  }
}
