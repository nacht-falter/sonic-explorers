import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "../Message";

test("renders message", () => {
  render(<Message type="warning" text="Test message" />);
  const message = screen.getByText("Test message");
  expect(message).toBeInTheDocument();
});
