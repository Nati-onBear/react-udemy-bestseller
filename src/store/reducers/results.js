import * as actionTypes from '../actions/actions'

const intialState = {
  results: []
}

const resultsReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat({ id: new Date(), value: action.result }) }

    case actionTypes.DELETE_RESULT:
      return { ...state, results: [...state.results].filter(res => res.id !== action.id) }

    default:
      return state
  }
}

export default resultsReducer