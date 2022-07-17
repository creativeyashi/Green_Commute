import { render,screen } from "@testing-library/react"
import  '@testing-library/jest-dom'
import { InputField } from "."




it('render Input Field',() => {

    render( <InputField Placeholder="Enter your skills" /> )
    const element = screen.getByPlaceholderText("Enter your skills")
    expect(element).toBeInTheDocument()

})