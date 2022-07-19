import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import RadioButton from './index'

afterEach(cleanup)
it('renders checked Radio button', () => {
  render(<RadioButton checked={true} value="iamselected" />, {})
  const button = screen.getByTestId('RadioButton')
  expect(button).toBeTruthy()
})

it('renders unchecked Radio button', () => {
  render(<RadioButton checked={false} value="iamnotselected" />, {})
  const button = screen.getByTestId('RadioButton')
  expect(button).toBeTruthy()
})
