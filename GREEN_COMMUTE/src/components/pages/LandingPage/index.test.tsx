import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from ".";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
it("Landing Page Should Render", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    }
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
it("Next Button Should Work", async () => {
  const data = [
    {
      id: 1,
      name: "Hyderabad",
      aqi_value: 894,
    },
    {
      id: 2,
      name: "Mumbai",
      aqi_value: 953,
    }
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );
  const buttonElement = await screen.findByTestId("handleNextStepper");
  fireEvent.click(buttonElement);
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "Hyderabad" } });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  expect(buttonElement).toBeInTheDocument();
});
