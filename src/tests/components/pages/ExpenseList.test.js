import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../../fixtures/expenses'
import { ExpenseList } from '../../../components/pages/ExpenseList'

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={ expenses } />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render expenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={ [] } />)
  expect(wrapper).toMatchSnapshot()
})