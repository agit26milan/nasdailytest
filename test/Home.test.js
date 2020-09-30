import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../src/Containers/Home'
import TestRenderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../src/Components/Navbar'
import Searchbar from '../src/Components/Search'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Container} from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'


configure({ adapter: new Adapter() })
describe('it should same as snapshot', () => {
  const wrapper = TestRenderer.create(<Home />)
  it('same as snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
describe('it should have main component', () => {
  const wrapper = shallow(<Home />)
  it('should have navbar', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1)
  })
  it('should have searchbar', () => {
    expect(wrapper.find(Searchbar)).toHaveLength(1)
  })
  it('should have container', () => {
    expect(wrapper.find(Container)).toHaveLength(1)
  })
  it('should have infinite scroll', () => {
    expect(wrapper.find(InfiniteScroll)).toHaveLength(1)
  })
  it('infinite scroll should have hasMore props', () => {
    expect(wrapper.find(InfiniteScroll).props().hasMore).toBeTruthy()
  })
  it('infinite scroll should have fetching data text', () => {
    expect(wrapper.find(InfiniteScroll).props().loader.props.children.props.children).toEqual('Fetching data...')
  })
})
