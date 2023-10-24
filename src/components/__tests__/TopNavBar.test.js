import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import TopNavBar from "../TopNavBar";

const renderTopNavBar = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <TopNavBar />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders sign in link", () => {
  renderTopNavBar();
  const signInLink = screen.getByRole("link", { name: "Sign In" });
  expect(signInLink).toBeInTheDocument();
});

test("renders profile button for signed-in users", async () => {
  renderTopNavBar();

  fireEvent.click(await screen.findByText("testuser"));
  const profileLink = await screen.findByText("My Profile");
  expect(profileLink).toBeInTheDocument();
});

test("renders upload button for signed-in users", async () => {
  renderTopNavBar();

  const profileAvatar = await screen.findByText("Upload sound");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders sign in and sign up links for signed-out users", async () => {
  renderTopNavBar();

  fireEvent.click(await screen.findByText("testuser"));
  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole("link", { name: "Sign In" });
  const signUpLink = await screen.findByRole("link", { name: "Sign Up" });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});

test("renders reports link for staff users", async () => {
  renderTopNavBar();

  fireEvent.click(await screen.findByText("testuser"));
  const staffButton = await screen.findByRole("link", { name: "Reports" });
  expect(staffButton).toBeInTheDocument();
});
