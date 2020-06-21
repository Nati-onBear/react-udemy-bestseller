import React from 'react'

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    border: '1px solid black'
  }

  const { letter, click } = props

  return (
    <div style={style} onClick={click}>
      <b><i>{letter.toUpperCase()}</i></b>
    </div>
  )
}

export default Char
