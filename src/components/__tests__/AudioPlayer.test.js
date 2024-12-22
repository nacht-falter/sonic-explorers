import React from "react";
import { render, screen } from "@testing-library/react";
import AudioPlayer from "../AudioPlayer";

test("renders AudioPlayer with controls and waveform", () => {
  render(<AudioPlayer audioName="Test Audio" />);
  const audioNameElement = screen.getByText("Test Audio");
  expect(audioNameElement).toBeInTheDocument();

  const playButton = screen.getByLabelText("play");
  expect(playButton).toBeInTheDocument();

  const waveform = screen.getByTestId("waveform");
  expect(waveform).toBeInTheDocument();

  const currentTime = screen.getByTestId("current-time");
  expect(currentTime).toBeInTheDocument();
});
