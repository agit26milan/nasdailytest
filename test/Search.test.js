import React from 'react'
import { shallow, configure } from 'enzyme'
import SearchComponent from '../src/Components/Search'
import Adapter from 'enzyme-adapter-react-16'
import TestRenderer from 'react-test-renderer'
import { FaSearch } from 'react-icons/fa'

configure({ adapter: new Adapter() })

describe('Should make snapshot', () => {
  const wrapper = TestRenderer.create(<SearchComponent />)
  it('should same as snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Should have some require component', () => {
  const wrapper = shallow(<SearchComponent />)
  it('Should have icon search', () => {
    expect(wrapper.find(FaSearch)).toHaveLength(1)
  })
  it('Should have input component', () => {
    expect(wrapper.find('#inputSearch')).toHaveLength(1)
  })
})
