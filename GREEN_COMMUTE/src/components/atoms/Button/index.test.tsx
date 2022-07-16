import { render, screen } from '@testing-library/react'
import { Buttons } from '.'
import '@testing-library/jest-dom'


describe('Button Test', () => {
  
  test('Button Save ', () => {
    
    render(<Buttons children="Save" />)
    const button = screen.getByRole('button')
   
    expect(button).toBeInTheDocument()
  })
  
  test('Button Next ', () => {
    
    render(<Buttons children="Next" />)
    const button = screen.getByRole('button')
  
    expect(button).toBeInTheDocument()
  })
})
