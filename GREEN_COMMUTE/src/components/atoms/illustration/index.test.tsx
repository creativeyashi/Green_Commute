import { render, screen } from "@testing-library/react";
import { IllustrationComp } from "../illustration/index";
import '@testing-library/jest-dom'

describe('illustration Test', () => {
  
    test('illustration Skill ', () => {
      
      render(<IllustrationComp source="../../assets/image/Skills.png" />)
      const skill = screen.getByRole('img')
     
      expect(skill).toBeInTheDocument()
    })
    
  })