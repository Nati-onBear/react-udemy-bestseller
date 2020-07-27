const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD') {
    return {
      ...state,
      counter: state.counter + action.payload.value
    }
  }
  if (action.type === 'DEC') {
    return {
      ...state,
      counter: state.counter - 1
    }
  }
  if (action.type === 'SUB') {
    return {
      ...state,
      counter: state.counter - action.payload.value
    }
  }
  return state
}

// Store
const store = createStore(rootReducer)

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

// Dispatching Action
store.dispatch({type: 'INC'})
store.dispatch({type: 'ADD', payload: {value: 10}})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'SUB', payload: {value: 3}})
