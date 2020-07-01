import React from 'react'
import './Cockpit.css'

const Cockpit = (props) => {
  const { personsNumber, showPersons, toggleVisibility, resetState } = props

  const toggleClasses = ['basic-button']
  showPersons ? toggleClasses.push('basic-color') : toggleClasses.push('hiding-color')

  const pClasses = []
  personsNumber <= 2 && pClasses.push('red')
  personsNumber <= 1 && pClasses.push('bold')

  return (
    <div>
      <h1>Hello, I'm learning React again!</h1>
      <p className={pClasses.join(' ')}>I hope this course will help me @@</p>
      <button className={toggleClasses.join(' ')} onClick={toggleVisibility}>Toggle People's Visibility!</button>
      <button className='basic-button basic-color' onClick={resetState}>Reset People</button>
    </div>
  )
}

export default Cockpit
