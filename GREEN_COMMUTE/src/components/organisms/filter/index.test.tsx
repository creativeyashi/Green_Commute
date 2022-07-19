import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FilterPopUp } from '.'

it('Text', () => {
  render(<FilterPopUp />)
  expect(screen.getByText('Distance')).toBeInTheDocument()
})
