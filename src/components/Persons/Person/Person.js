import React, { memo } from 'react'
import Radium from "radium";
import './Person.css'



const person = (props) => {
  const { name, age, hobby, click, changed } = props
  const style = {
    '@media (minWidth: 500px)': {
      width: '400px'
    },
    '@media (maxWidth: 500px': {
      '.input-style': {
        width:'100%',
        boxSizing:'border-box'
      }
    }
  }
  return (
    <div className='Person' style={style}>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input type='text' onChange={changed} value={name} style={{width:'50%',boxSizing:'border-box'}} />
    </div>
  )
}

export default memo(person)


