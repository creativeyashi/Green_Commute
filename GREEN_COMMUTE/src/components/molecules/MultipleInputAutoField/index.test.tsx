import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AutoComplete from ".";
const setValue = jest.fn();

it("AutoComplete should Render", () => {
  render(
    <AutoComplete
      title="Where do you want to work"
      placeholder="Enter your job Location"
      option={[
        { name: "Hyderabad" },
        { name: "Mumbai" }
      ]}
      setValue={setValue}
    />
  );
  const radioElement = screen.getByTestId("autoCompleteLabel");
  expect(radioElement).toBeInTheDocument();
});

it("Radio Button should Render", () => {
  render(
    <AutoComplete
      title="Where do you want to work"
      placeholder="Enter your job Location"
      option={[
        { name: "Hyderabad" },
        { name: "Mumbai" }
      ]}
      setValue={setValue}
    />
  );
  const inputElement = screen.getByTestId("autocompleteInput");
  fireEvent.focus(inputElement);
  expect(inputElement).toBeInTheDocument();
});
