import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTabs from ".";


const tabs = [
  {
    value: 0,
    label: "HELLOW2",

  },
  {
    value: 1,
    label: "",
  },
];

const mockCallback = jest.fn();

test("should render 2 tabs for 2 length data", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const tabsElement = screen.getAllByTestId(/tab-/);
  expect(tabsElement.length).toBe(2);
});

test("tabs should be present in document", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const selectElement = screen.getByTestId("tabbox");
  expect(selectElement).toBeInTheDocument();
});

test("change tabs", () => {
  render(<CustomTabs tabs={tabs} stateHandler={mockCallback}></CustomTabs>);
  const selectElement = screen.getAllByRole("tab");
  fireEvent.click(selectElement[1]);
  screen.debug(undefined, Infinity);
});
