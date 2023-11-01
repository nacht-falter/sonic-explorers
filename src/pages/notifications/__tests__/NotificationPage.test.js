import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import NotificationPage from "../NotificationPage";

const renderLoggedOutNotificationPage = () => {
  render(
    <BrowserRouter>
      <NotificationPage />
    </BrowserRouter>
  );
};

const renderLoggedInNotificationPage = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <NotificationPage />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders logged-out message for logged-out users", async () => {
  renderLoggedOutNotificationPage();
  const loggedOutMessage = await screen.findByText("Please sign in to view this page.");
  expect(loggedOutMessage).toBeInTheDocument();
});

test("renders notifications for logged-in users", async () => {
  renderLoggedInNotificationPage();
  const categories = ["like", "comment", "follow", "sound", "report"];
  for (let category of categories) {
    const notification = await screen.findByText(`Test ${category} notification`);
    expect(notification).toBeInTheDocument();
  }
});
