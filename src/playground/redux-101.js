import { createStore } from "redux";

// Action generators ~ functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action (return an object)
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }
}

// create a store with state, object count starts off with 0
const store = createStore(countReducer)

// console.log the state when it changes, with the function unSubscribe() you stop showing the changes
const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(decrementCount({ decrementBy: 8 }))
store.dispatch(decrementCount())
store.dispatch(resetCount())
store.dispatch(setCount({ count: 101 }))
store.dispatch(setCount({ count: -101 }))
