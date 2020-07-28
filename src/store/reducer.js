const intialState = {
  counter: 2
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'INC':
      return { counter: state.counter + 1 }
    
    case 'DEC':
      return { counter: state.counter - 1 }
  
    case 'ADD':
      return { counter: state.counter + action.value }

    case 'SUB':
      return { counter: state.counter - action.value }

    default:
      return state
  }
}

export default reducer