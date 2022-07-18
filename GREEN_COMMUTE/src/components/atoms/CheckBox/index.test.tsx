import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import CheckBoxComponent from "./index";

afterEach(cleanup);
it("renders checked button", () => {
  render(<CheckBoxComponent checked={true} value="iamchecked" />, {
  });
  const button = screen.getByTestId("CheckBox");
  expect(button).toBeTruthy();
  
});

it("renders unchecked button", () => {
  render(<CheckBoxComponent checked={false} value="iamunchecked" />, {
  });
  const button = screen.getByTestId("CheckBox");
  expect(button).toBeTruthy();
  
});