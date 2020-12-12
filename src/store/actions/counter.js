import * as actionTypes from './actionTypes'

export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: actionTypes.INCREMENT })
    }, 2000)
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    value
  }
}

export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    value
  }
}
