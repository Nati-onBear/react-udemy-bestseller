import * as actionTypes from './actions'

const intialState = {
  counter: 2,
  results: []
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 }
  
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.value }

    case actionTypes.SUBTRACT:
      return { ...state, counter: state.counter - action.value }

    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat({ id: new Date(), value: state.counter }) }

    case actionTypes.DELETE_RESULT:
      return { ...state, results: [...state.results].filter(res => res.id !== action.id) }

    default:
      return state
  }
}

export default reducer