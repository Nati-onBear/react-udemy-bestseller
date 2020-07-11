import React, { Component } from 'react'
import Radium from "radium";
import './Person.css'

class Person extends Component {
  style = {
    '@media (min-width: 500px)': {
      width: '400px'
    },
    '@media (max-width: 500px': {
      '.input-style': {
        width:'100%',
        boxSizing:'border-box'
      }
    }
  }

  shouldComponentUpdate(nextProps, nexState) {
    console.log('[Person.js] ' + this.props.name + ' shouldComponentUpdate')
    if (this.props.name !== nextProps.name)
      return true
    return false
  }

  render() {
    const { name, age, hobby, click, changed } = this.props
    console.log('[Person.js] ' + this.props.name + ' rendering')
    return (
      <div className='Person' style={this.style}>
        <p onClick={click}>I'm {name}, I'm {age} years old!</p>
        <p>{hobby ? '& I\'m love ' : null } {hobby}</p>
        <input type='text' onChange={changed} value={name} style={{width:'90%',boxSizing:'border-box'}} />
      </div>
    )
  }
}

export default Radium(Person);

