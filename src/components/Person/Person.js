import React from 'react'

const person = (props) => {
  const { name, age, hobby } = props
  return <p>I'm {name}, I'm {age} years old & I love {hobby}!</p>
}

export default person;