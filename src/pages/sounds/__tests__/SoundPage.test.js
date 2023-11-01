import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { CurrentUserProvider } from "../../../contexts/CurrentUserContext";
import SoundPage from "../SoundPage";

const renderSoundPage = () => {
  render(
    // Instructions for passing for mocking useParams: https://stackoverflow.com/a/72053411
    <MemoryRouter initialEntries={["/sounds/1"]}>
      <Route path="/sounds/:id">
        <CurrentUserProvider>
          <SoundPage />
        </CurrentUserProvider>
      </Route>
    </MemoryRouter>
  );
};

test("renders goBackButton", async () => {
  renderSoundPage();
  const goBackButton = await screen.findByRole("button", { name: "Go back" });
  expect(goBackButton).toBeInTheDocument();
});

test("renders SoundDetail", async () => {
  renderSoundPage();
  const soundTitle = await screen.findByRole("link", { name: "SoundImage Test sound" });
  const audioPlayer = await screen.findByLabelText("play");
  expect(audioPlayer).toBeInTheDocument();
  expect(soundTitle).toBeInTheDocument();
});

test("renders comments", async () => {
  renderSoundPage();
  const commentField = await screen.findByPlaceholderText("Leave a comment");
  const commentButton = await screen.findByRole("button", { name: "Comment" });
  const comments = await screen.findAllByTestId("comment");
  expect(commentField).toBeInTheDocument();
  expect(commentButton).toBeInTheDocument();
  expect(comments.length).toEqual(2);
});

test("renders sound dropdown for logged-in user", async () => {
  renderSoundPage();
  const dropdownMenus = await screen.findAllByTestId("dropdown-icon");
  fireEvent.click(dropdownMenus[0]);
  const editButton = await screen.findByRole("button", { name: "Edit sound" });
  const deleteButton = await screen.findByRole("button", { name: "Delete sound" });
  const reportButton = await screen.findByRole("button", { name: "Report sound" });
  expect(deleteButton).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(reportButton).toBeInTheDocument();
});

test("renders comment dropdown for logged-in user", async () => {
  renderSoundPage();
  const dropdownMenus = await screen.findAllByTestId("dropdown-icon");
  fireEvent.click(dropdownMenus[1]);
  const editButton = await screen.findByRole("button", { name: "Edit comment" });
  const deleteButton = await screen.findByRole("button", { name: "Delete comment" });
  expect(editButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});
