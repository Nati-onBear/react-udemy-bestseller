import React from 'react'

const person = (props) => {
  const { name, age, children } = props
  return (
    <div>
      <p>I'm {name}, I'm {age} years old</p>
      <p>{children}</p>
    </div>
  )
}

export default person;