import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import SignUpForm from "../SignUpForm";

const renderSignUpForm = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <SignUpForm />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders SignUpForm with username and password fields", () => {
  renderSignUpForm();
  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  const passwordInput1 = screen.getByPlaceholderText("Password");
  const passwordInput2 = screen.getByPlaceholderText("Confirm Password");
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput1).toBeInTheDocument();
  expect(passwordInput2).toBeInTheDocument();
});

test("renders sign up button", () => {
  renderSignUpForm();
  const signUpButton = screen.getByRole("button", { name: "Sign Up" });
  expect(signUpButton).toBeInTheDocument();
});

test("sign in link works correctly", () => {
  renderSignUpForm();
  const signInLink = screen.getByRole("link", { name: "Already have an account? Sign in" });
  expect(signInLink).toBeInTheDocument();
  fireEvent.click(signInLink);
  expect(window.location.pathname).toEqual("/signin");
});

test("sign up button works correctly", async () => {
  renderSignUpForm();

  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  const passwordInput1 = screen.getByPlaceholderText("Password");
  const passwordInput2 = screen.getByPlaceholderText("Confirm Password");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput1, { target: { value: "testpassword" } });
  fireEvent.change(passwordInput2, { target: { value: "testpassword" } });

  const signUpButton = screen.getByRole("button", { name: "Sign Up" });
  fireEvent.click(signUpButton);

  expect(window.location.pathname).toEqual("/signin");
});
