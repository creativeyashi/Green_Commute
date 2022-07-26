import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Routes from './index'

describe('Vehicle Tab component', () => {
  test('Match the snapshot', () => {
    const wrapper = render(<Routes />)
    expect(wrapper).toBeTruthy()
  })
})
