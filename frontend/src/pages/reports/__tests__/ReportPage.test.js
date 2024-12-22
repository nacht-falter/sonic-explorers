import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import ReportPage from "../ReportPage";

const renderLoggedOutReportPage = () => {
  render(
    <BrowserRouter>
      <ReportPage />
    </BrowserRouter>
  );
};

const renderLoggedInReportPage = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <ReportPage />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders logged-out message for logged-out users", async () => {
  renderLoggedOutReportPage();
  const loggedOutMessage = await screen.findByText("Please sign in to view this page.");
  expect(loggedOutMessage).toBeInTheDocument();
});

test("renders reports for logged-in users", async () => {
  renderLoggedInReportPage();
  const flags = {
    hate: "Hate speech",
    illegal: "Illegal/extremist content",
    violence: "Violent content",
    pornographic: "Pornographic Content",
    harassment: "Harassment or bullying",
    privacy: "Privacy violation",
    property: "Intellectual property violation",
    other: "Other",
  };

  for (let i = 1; i <= flags.length; i++) {
    const report = await screen.findByText(`Test report ${i}`);
    const soundLink = await screen.findByRole("link", { name: `Sound ${i}` });
    expect(report).toBeInTheDocument();
    expect(soundLink).toBeInTheDocument();
  }

  for (let flag in flags) {
    const flagItem = await screen.findByText(flags[flag]);
    const details = await screen.findByText(`Test ${flags[flag]} report`);
    expect(flagItem).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  }
});

test("renders close button for each report", async () => {
  renderLoggedInReportPage();
  const closeButtons = await screen.findAllByRole("button", { name: "Close report" });
  const reopenButtons = await screen.findAllByRole("button", { name: "Reopen report" });
  expect(closeButtons.length).toEqual(4);
  expect(reopenButtons.length).toEqual(4);
});
