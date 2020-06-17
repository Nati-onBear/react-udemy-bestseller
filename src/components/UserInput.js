import React from 'react'

export default function UserInput(props) {
  const { changed, name } = props

  const inputStyle = {
    margin: '16px',
    boxShadow: '0px 2px 3px #ccc',
    border: '1px solid lightgrey'
  }

  return (
    <div>
      <input style={inputStyle} type='text' aria-label='Input' onChange={changed} value={name} />
    </div>
  )
}
