import React from 'react'
import { render, screen } from '@testing-library/react'
import { ButtonComponent } from '.'
import '@testing-library/jest-dom'

// eslint-disable-next-line no-undef
describe('Button Test', () => {
  // eslint-disable-next-line no-undef
  test('Button Save ', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<ButtonComponent children="Save" />)
    const button = screen.getByRole('button')
    // eslint-disable-next-line no-undef
    expect(button).toBeInTheDocument()
  })
  // eslint-disable-next-line no-undef
  test('Button Next ', () => {
    // eslint-disable-next-line react/no-children-prop
    render(<ButtonComponent children="Next" />)
    const button = screen.getByRole('button')
    // eslint-disable-next-line no-undef
    expect(button).toBeInTheDocument()
  })
})
