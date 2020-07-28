import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './Person.css'
import withClass from '../../../hoc/WithClass'
import Auxiliary from '../../../hoc/Auxiliary'

const person = (props) => {
  const { name, age, hobby, click, changed } = props
  
  return (
    <Auxiliary>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input className='input-style' type='text' onChange={changed} value={name} style={{width:'50%',boxSizing:'border-box'}} />
    </Auxiliary>
  )
}

person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
  hobby: PropTypes.string
}

export default memo(withClass(person, 'Person'))


