import { render,screen } from "@testing-library/react";
import { SideMenu } from ".";
import "@testing-library/jest-dom"


it("Text",()=>{
    render(<SideMenu />)
    expect(screen.getByText("Find Jobs")).toBeInTheDocument();
})