import React, { useEffect } from 'react'
import Person from './Person/Person'

const Persons = (props) => {
  const { persons, deletePersonHandler, changedNameHandler } = props

  // useEffect(() => {
  //   console.log('[Persons.js] useEffect')
  //   // HTTP req...
  //   setTimeout(() => {
  //     alert('Saved data of Persons.js to cloud!')
  //   }, 1000)
  //   return () => {
  //     console.log('[Persons.js] cleanup work in useEffect!')
  //   }
  // }, [])

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
