import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Success from './index'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('File upload success Component', () => {
  it('upload success modal', () => {
    const wrapper = render(<Success name={'abc'} />)
    expect(wrapper).toBeTruthy()
  })
  it('modal close button', () => {
    const wrapper = render(<Success name={'abc'} />)
    const btn = wrapper.getByTestId('okay-btn')
    if (btn instanceof HTMLElement) {
      btn.click()
    }
    expect(btn).toBeTruthy()
  })
})
