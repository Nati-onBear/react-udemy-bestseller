const intialState = {
  counter: 2,
  results: []
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 }
    
    case 'DEC':
      return { ...state, counter: state.counter - 1 }
  
    case 'ADD':
      return { ...state, counter: state.counter + action.value }

    case 'SUB':
      return { ...state, counter: state.counter - action.value }

    case 'STORE':
      return { ...state, results: state.results.concat({ id: new Date(), value: state.counter }) }

    case 'DELETE':
      return { ...state, results: [...state.results].filter(res => res.id !== action.id) }

    default:
      return state
  }
}

export default reducer