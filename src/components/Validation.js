import React from 'react'

const Validation = (props) => {
  const { length } = props
  return (
    <div>
      <h1>{length < 5 ? 'Text too short!' : 'Text long enough <3'}</h1>
    </div>
  )
}

export default Validation
