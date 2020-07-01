import React from 'react'
import Radium from "radium";
import './Person.css'

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '400px'
    },
    '@media (max-width: 500px': {
      '.input-style': {
        width:'100%',
        boxSizing:'border-box'
      }
    }
  }
  const { name, age, hobby, click, changed } = props
  return (
    <div className='Person' style={style}>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input type='text' onChange={changed} value={name} style={{width:'90%',boxSizing:'border-box'}} />
    </div>
  )
}

export default Radium(person);