import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SingleAutoComplete from '.'

const onChange = jest.fn()

it('AutoComplete should Render', () => {
  render(
    <SingleAutoComplete
      options={['E Marredpally, Secunderabad,Hyderabad']}
      onChange={onChange}
    />
  )
  const radioElement = screen.getByRole('combobox')
  expect(radioElement).toBeInTheDocument()
})
