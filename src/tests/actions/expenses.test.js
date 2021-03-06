import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { 
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses'

import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testUID'
const defaultAuthState = { auth: { uid } }
const createStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expenses from firebase', (done) => {
  const store = createStore(defaultAuthState)
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
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

test('should edit expense from firebase', (done) => {
  const store = createStore(defaultAuthState)
  const id = expenses[0].id
  const updates = { amount: 54321 }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
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
  const store = createStore(defaultAuthState)
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
      
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
          expect(snapshot.val()).toEqual(expenseData)
          done()
        })
})

test('should add expense with defaults to database en store', (done) => {
  const store = createStore(defaultAuthState)
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
      
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
          expect(snapshot.val()).toEqual(expenseDefaults)
          done()
        })
})

test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})

