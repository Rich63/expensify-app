import { shallow } from 'enzyme'
import React from 'react'

import LoadingPage from '../../../components/pages/LoadingPage'

test('Should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />)

  expect(wrapper).toMatchSnapshot()
})
