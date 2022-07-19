import { render, screen } from '@testing-library/react'
import Button from './index'
import '@testing-library/jest-dom'

it('Button Save', () => {
  // eslint-disable-next-line react/no-children-prop
  render(<Button children="Save" />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})

it('Button Next', () => {
  // eslint-disable-next-line react/no-children-prop
  render(<Button children="Next" />)
  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})
