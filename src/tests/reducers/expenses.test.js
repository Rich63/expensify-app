import moment from 'moment'
import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('Should setup default expenses array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Add an expense', () => {
  const expense = { 
    id: '4',
    description: 'Car fixing',
    note: '',
    amount: 44400,
    createdAt: 0
  }
  const action = { 
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state.length).toEqual(expenses.length + 1) // new length of array should be old array + 1
  expect(state).toEqual([...expenses, expense]) // array of expeses + the new expense
})

test('Should edit an expense', () => {
  const description = "changed value for description"
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { description }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].description).toBe('changed value for description')
})

test('Should not edit an expense if id not found', () => {
  const description = "changed value for description"
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { description }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
