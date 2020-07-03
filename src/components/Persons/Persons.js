import React from 'react'
import Person from './Person/Person'

const Persons = (props) => {
  const { persons, deletePersonHandler, changedNameHandler } = props
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

export default Persons
