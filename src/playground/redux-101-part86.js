import { createStore } from "redux";

// create a store with state, object count starts off with 0
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 3
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
})

// Show the current state
console.log(store.getState());

// Actions ~ an object that gets sent to the store
// increment, decrement, reset will be the actions that are dispatched to the store to change the state
// Actions are used to solve the following questions.

// I'd like to increase the value of count with 1.
store.dispatch({
  type: 'INCREMENT'
});

// Show the current state after the dispatch
console.log(store.getState());

// I'd like to decrease the value of count with 1.
store.dispatch({
  type: 'DECREMENT'
});

// Show the current state after the dispatch
console.log(store.getState());

// I'd like to reset the count value to zero.
store.dispatch({
  type: 'RESET'
});

// Show the current state after the dispatch
console.log(store.getState());


