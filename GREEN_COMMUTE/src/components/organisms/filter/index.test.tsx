import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { FilterPopUp } from './index'

it('Text', () => {
  render(
    <FilterPopUp
      onApply={(distance: string) => {
        console.log('Filter Applied' + distance)
      }}
      onClear={() => {
        console.log('cleared')
      }}
    />
  )
  expect(screen.getByText('Distance')).toBeInTheDocument()
})

it('Clear Button', () => {
  render(
    <FilterPopUp
      onApply={(distance: string) => {
        console.log('Filter Applied' + distance)
      }}
      onClear={() => {
        console.log('cleared')
      }}
    />
  )
  const clearButton = screen.getByText('Clear All')
  expect(clearButton).toBeInTheDocument()
  fireEvent.click(clearButton, {
    target: { value: 'JavaScript' },
  })
})

it('Apply Button', () => {
  render(
    <FilterPopUp
      onApply={(distance: string) => {
        console.log('Filter Applied' + distance)
      }}
      onClear={() => {
        console.log('cleared')
      }}
    />
  )
  const applyButton = screen.getByText('Apply')
  expect(applyButton).toBeInTheDocument()
  fireEvent.click(applyButton, {
    target: { value: 'JavaScript' },
  })
})
