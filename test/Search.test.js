import React from 'react'
import { shallow, configure } from 'enzyme'
import SearchComponent from '../src/Components/Search'
import Adapter from 'enzyme-adapter-react-16'
import TestRenderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('Should make snapshot', () => {
  const wrapper = TestRenderer.create(<SearchComponent />)
  it('should same as snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})