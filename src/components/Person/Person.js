import React from 'react'
import './Person.css'

const person = (props) => {
  const { name, age, hobby, click, changed } = props
  return (
    <div className='Person'>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  )
}

export default person;