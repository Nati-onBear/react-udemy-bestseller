import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const intialState = {
  results: []
}

const storeResult = (state, action) => {
  const updatedArray = [...state.results].concat({ id: new Date(), value: action.result })
  return updateObject(state, { results: updatedArray })
}

const deleteResult = (state, action) => {
  const updatedArray = [...state.results].filter(res => res.id !== action.id)
  return updateObject(state, { results: updatedArray })
}

const resultsReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT : return storeResult(state, action)
    case actionTypes.DELETE_RESULT : return deleteResult(state, action)
    default : return state
  }
}

export default resultsReducer