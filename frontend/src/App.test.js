import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";

const renderApp = () => {
  render(
    <BrowserRouter>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <App />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  );
};

test("renders main title and page heading", () => {
  renderApp();
  const mainTitle = screen.getByRole("heading", { name: "Sonic Explorers" });
  const pageTitle = screen.getByRole("heading", { name: "Explore all Sounds" });
  expect(mainTitle).toBeInTheDocument();
  expect(pageTitle).toBeInTheDocument();
});

test("render nav bars", () => {
  renderApp();
  const navBars = screen.queryAllByRole("navigation");
  expect(navBars.length).toBe(2);
  expect(navBars[0]).toHaveClass("TopNavBar");
  expect(navBars[1]).toHaveClass("BottomNavBar");
});

test("renders search bar", async () => {
  renderApp();
  const searchBar = await screen.findByPlaceholderText("Search for sounds, tags, or users");
  expect(searchBar).toBeInTheDocument();
});

test("renders sound list", async () => {
  renderApp();
  const sound1 = await screen.findByText("Test sound 1");
  const sound2 = await screen.findByText("Test sound 2");
  expect(sound1).toBeInTheDocument();
  expect(sound2).toBeInTheDocument();
});

test("renders profile list", async () => {
  renderApp();
  const profileWidgets = await screen.findAllByText("Popular Explorers");
  expect(profileWidgets.length).toBe(2);
});
