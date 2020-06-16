import React from 'react'

const person = (props) => {
  const { name, age, hobby } = props
  return (
    <div>
      <p>I'm {name}, I'm {age} years old {hobby ? '& I\'m love ' : null } {hobby}</p>
    </div>
  )
}

export default person;