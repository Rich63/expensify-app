import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createStore = configureMockStore([thunk])

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'This is a new note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'This is a new note'
    }
  })
})

test('Should setup add an expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database en store', (done) => {
  const store = createStore({})
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1568102921277
  }

  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0])
        .toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        })
      
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
          expect(snapshot.val())
            .toEqual(expenseData)
          done()
        })
})

test('should add expense with defaults to database en store', (done) => {
  const store = createStore({})
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0])
        .toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults
          }
        })
      
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
          expect(snapshot.val())
            .toEqual(expenseDefaults)
          done()
        })
})

// test('Should setup add an expense action object with default values', () => {
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '', 
//       amount: 0, 
//       createdAt: 0,
//       note: '',
//       id: expect.any(String)
//     }
//   })
// })