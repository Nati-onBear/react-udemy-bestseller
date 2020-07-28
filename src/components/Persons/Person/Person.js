import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './Person.css'
import withClass from '../../../hoc/WithClass'
import Auxiliary from '../../../hoc/Auxiliary'
import AuthContext from '../../../context/auth-context'

const person = (props) => {
  const { name, age, hobby, click, changed } = props
  
  // static contextType = AuthContext // only for class component

  return (
    <Auxiliary>
      <AuthContext.Consumer> {/* with contextType, remove Consumer and context, context.auth -> this.context.auth */}
        {context => 
          context.authenticated ? <p>Authenticated!</p> : <p>Plss Login!</p>
        }
      </AuthContext.Consumer>
      <p onClick={click}>I'm {name}, I'm {age} years old!</p>
      <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
      <input 
        // ref={(inputEl) => {this.inputElement = inputEl.focus()}} // only for class component as required componentDidMount()
        className='input-style' 
        type='text' 
        onChange={changed} 
        value={name} 
        style={{width:'50%',boxSizing:'border-box'}} 
      />
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


