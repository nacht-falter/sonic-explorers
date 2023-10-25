import React from "react";
import { render, screen } from "@testing-library/react";
import AudioPlayer from "../AudioPlayer";

// Mock HTMLMediaElement prototype methods. Solution from:
// https://stackoverflow.com/questions/51829319/how-to-mock-video-pause-function-using-jest
jest.spyOn(window.HTMLMediaElement.prototype, "load").mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});

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
