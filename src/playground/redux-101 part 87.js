import { createStore } from "redux";

// create a store with state, object count starts off with 0
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
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
})

// console.log the state when it changes, with the function unSubscribe() you stop showing the changes
const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// unSubscribe() to stop console.log the changed state

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});
