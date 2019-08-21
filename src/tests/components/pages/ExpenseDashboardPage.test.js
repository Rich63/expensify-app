import { shallow } from 'enzyme'
import React from 'react'

import DashboardPage from '../../../components/pages/DashboardPage'

test('Should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
})