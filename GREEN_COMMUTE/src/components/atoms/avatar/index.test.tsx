import { render, screen } from "@testing-library/react";
import Avatar from ".";
import "@testing-library/jest-dom";

it("should renders the avatar", () => {
  render(<Avatar/>);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
