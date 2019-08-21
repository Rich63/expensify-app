import moment from 'moment'
import { setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('Should generate set text filter object with text value', () => {
  const text = 'testing SET_TEXT_FILTER'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should generate set text filter object with no text value', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should generate action objects for sort by date', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('Should generate action objects for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })  // Does the same as the above code
})

test('Should filter action objects by text', () => {
  const action = setTextFilter('test')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
})

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0) 
  })
})

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0) 
  })
})