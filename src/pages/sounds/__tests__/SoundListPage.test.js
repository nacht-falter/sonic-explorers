import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SoundListPage from "../SoundListPage";
import { ProfileDataProvider } from "../../../contexts/ProfileDataContext";

const renderSoundListPage = () => {
  render(
    <BrowserRouter>
      <ProfileDataProvider>
        <SoundListPage />
      </ProfileDataProvider>
    </BrowserRouter>
  );
};

test("renders popularProfiles widgets", async () => {
  renderSoundListPage();
  const popularProfiles = await screen.findAllByText("Popular Explorers");
  expect(popularProfiles[0]).toBeInTheDocument();
  expect(popularProfiles[1]).toBeInTheDocument();

  const userLink1 = screen.getAllByText("testuser1");
  const userLink2 = screen.getAllByText("testuser2");
  expect(userLink1.length).toEqual(2);
  expect(userLink2.length).toEqual(2);
});

test("renders sound details for each sound", async () => {
  renderSoundListPage();
  const soundLink1 = await screen.findByRole("link", { name: "SoundImage Test sound 1" });
  const soundLink2 = await screen.findByRole("link", { name: "SoundImage Test sound 2" });
  expect(soundLink1).toBeInTheDocument();
  expect(soundLink2).toBeInTheDocument();

  const description1 = await screen.findByText("Test description 1");
  const description2 = await screen.findByText("Test description 2");
  expect(description1).toBeInTheDocument();
  expect(description2).toBeInTheDocument();

  const tags = ["tag1", "tag2", "tag3", "tag4"];
  tags.forEach((tag) => {
    expect(screen.getByText(tag)).toBeInTheDocument();
  });
});

test("renders audio player for each sound", async () => {
  renderSoundListPage();
  const playButton = await screen.findAllByLabelText("play");
  const waveforms = await screen.findAllByTestId("waveform");
  expect(waveforms.length).toEqual(2);
  expect(playButton.length).toEqual(2);
});

test("renders map for each sound", async () => {
  renderSoundListPage();
  const maps = await screen.findAllByText("Leaflet");
  expect(maps.length).toEqual(2);
});

test("renders search bar", async () => {
  renderSoundListPage();
  const searchBar = await screen.findByPlaceholderText("Search for sounds, tags, or users");
  expect(searchBar).toBeInTheDocument();
});
