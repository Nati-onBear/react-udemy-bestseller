import React, { memo } from 'react'
import './Person.css'

const person = (props) => {
  const { name, age, hobby, click, changed } = props
  
  return (
    <div className='Person'>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input className='input-style' type='text' onChange={changed} value={name} style={{width:'50%',boxSizing:'border-box'}} />
    </div>
  )
}

export default memo(person)


