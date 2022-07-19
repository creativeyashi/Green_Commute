// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-children-prop */
import { render, screen } from '@testing-library/react'
import Button from '.'
import '@testing-library/jest-dom'

it('Button Save', () => {
  render(<Button children="Save" />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

it('Button Next', () => {
  render(<Button children="Next" />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})
