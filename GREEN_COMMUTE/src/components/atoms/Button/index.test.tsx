import { render, screen } from '@testing-library/react'
import { Buttons } from '.'
import '@testing-library/jest-dom'



  
  it('Button Save', () => {
    
    render(<Buttons children="Save" />)
    const button = screen.getByRole('button')
   
    expect(button).toBeInTheDocument()
  });
  
  it("Button Next", () => {
    
    render(<Buttons children="Next" />)
    const button = screen.getByRole('button')
  
    expect(button).toBeInTheDocument()
  });
