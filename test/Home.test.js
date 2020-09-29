import React from 'react'
import { render } from '@testing-library/react'
import Home from '../src/Containers/Home'
import '@testing-library/jest-dom/extend-expect'

test('Should be get list news', () => {
  const { container, getByText } = render(<Home />)
  console.log(container, 'mamak')
})
