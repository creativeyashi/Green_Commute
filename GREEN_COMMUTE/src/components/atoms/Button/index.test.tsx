import { render, screen } from '@testing-library/react'
import { ButtonComponent } from '.'
import '@testing-library/jest-dom'


describe('Button Test', () => {
  
  test('Button Save ', () => {
    
    render(<ButtonComponent children="Save" />)
    const button = screen.getByRole('button')
   
    expect(button).toBeInTheDocument()
  })
  
  test('Button Next ', () => {
    
    render(<ButtonComponent children="Next" />)
    const button = screen.getByRole('button')
  
    expect(button).toBeInTheDocument()
  })
})
