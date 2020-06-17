import React from 'react'

const person = (props) => {
  const { name, age, hobby, click, changed } = props
  return (
    <div onClick={click}>
      <p>I'm {name}, I'm {age} years old {hobby ? '& I\'m love ' : null } {hobby}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  )
}

export default person;