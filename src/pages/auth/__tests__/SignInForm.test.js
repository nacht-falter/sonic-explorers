import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignInForm from "../SignInForm";

const renderSignInForm = () => {
  render(
    <BrowserRouter>
      <SignInForm />
    </BrowserRouter>
  );
};

test("renders SignInForm with username and password fields", () => {
  renderSignInForm();
  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("renders sign in button", () => {
  renderSignInForm();
  const signInButton = screen.getByRole("button", { name: "Sign In" });
  expect(signInButton).toBeInTheDocument();
});

test("sign up link works correctly", () => {
  renderSignInForm();
  const signUpLink = screen.getByRole("link", { name: "Don't have an account yet? Sign up" });
  expect(signUpLink).toBeInTheDocument();

  fireEvent.click(signUpLink);
  expect(window.location.pathname).toEqual("/signup");
});
