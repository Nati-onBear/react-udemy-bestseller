const intialState = {
  counter: 2
}

const reducer = (state = intialState, action) => {
  if (action.type === 'INC') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  return state
}

export default reducer