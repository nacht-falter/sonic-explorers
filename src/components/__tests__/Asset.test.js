import { render, screen } from "@testing-library/react";
import Asset from "../Asset";

test("renders with a spinner", () => {
  render(<Asset spinner={true} />);
  const spinner = screen.getByRole("status");
  expect(spinner).toBeInTheDocument();
});

test("renders with an image", () => {
  render(<Asset img="test-image.jpg" message="Test message" />);
  const image = screen.getByAltText("Test message");
  expect(image).toBeInTheDocument();
});

test("renders with a message", () => {
  render(<Asset message="Testing" />);
  const message = screen.getByText("Testing");
  expect(message).toBeInTheDocument();
});
