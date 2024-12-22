import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

test("renders with image", () => {
  render(<Avatar src="test-image.jpg" text="testuser" />);
  const avatar = screen.getByAltText("Avatar");
  expect(avatar).toBeInTheDocument();
});

test("renders with text", () => {
  render(<Avatar text="testuser" />);
  const text = screen.getByText("testuser");
  expect(text).toBeInTheDocument();
});

test("renders with default height", () => {
  render(<Avatar />);
  const avatar = screen.getByRole("img");
  // Assert attribute: https://github.com/testing-library/jest-dom#tohaveattribute
  expect(avatar).toHaveAttribute("height", "50");
});

test("renders with custom height", () => {
  render(<Avatar src="test-image.jpg" height={42} />);
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute("height", "42");
});

test("stacked image does not have right margin", () => {
  render(<Avatar src="test-image.jpg" stack />);
  const avatar = screen.getByRole("img");
  // Assert class name: https://github.com/testing-library/jest-dom#tohaveclass
  expect(avatar).not.toHaveClass("me-2");
});

test("non stacked image has right margin", () => {
  render(<Avatar src="test-image.jpg" />);
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveClass("me-2");
});
