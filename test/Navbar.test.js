import React from 'react'
import { shallow, configure } from 'enzyme'
import NavbarComponent from '../src/Components/Navbar'
import { Navbar } from 'react-bootstrap'
import Adapter from 'enzyme-adapter-react-16'
import TestRenderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('Should make snapshot', () => {
  const wrapper = TestRenderer.create(<NavbarComponent />)
  it('should same as snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Render navbar component', () => {
  const wrapper = shallow(<NavbarComponent />)
  it('Should have navbar componet', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1)
    expect(wrapper.find(Navbar.Brand)).toHaveLength(1)
    expect(wrapper.find(Navbar.Toggle)).toHaveLength(1)
  })
})
