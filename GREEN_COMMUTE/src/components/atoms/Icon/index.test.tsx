import { render , screen } from "@testing-library/react";
import Icons from "./index";
import '@testing-library/jest-dom';

describe('Icon Test', () => {
  
    test('Icon Current ', () => {
      
      render(<Icons source="../../../assets/icons/current.svg" />)
      const current = screen.getByRole('img')
     
      expect(current).toBeInTheDocument()
    })
    test('Icon Location ', () => {
      
        render(<Icons source="../../../assets/icons/location.svg" />)
        const location = screen.getByRole('img')
       
        expect(location).toBeInTheDocument()
      })
    
  })
  


  