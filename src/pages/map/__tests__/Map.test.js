import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Map from "../Map";

test("renders map with map marker for each sound", async () => {
  render(
    <BrowserRouter>
      <Map />
    </BrowserRouter>
  );
  const markers = await screen.findAllByRole("button", { name: "Marker" });
  expect(markers.length).toEqual(2);
  fireEvent.click(markers[0]);
  expect(await screen.findByRole("link", { name: "SoundImage Test sound 1" })).toBeInTheDocument();
  fireEvent.click(markers[1]);
  expect(await screen.findByRole("link", { name: "SoundImage Test sound 2" })).toBeInTheDocument();
});
