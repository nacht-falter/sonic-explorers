import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SoundCreateForm from "../SoundCreateForm";

// Jest documentation for mock functions: https://jestjs.io/docs/mock-function-api
const showMessage = jest.fn();
const renderSoundCreateForm = () => {
  render(
    <BrowserRouter>
      <SoundCreateForm showMessage={showMessage} />
    </BrowserRouter>
  );
};

test("renders SoundCreateForm with all fields", () => {
  renderSoundCreateForm();
  const audioField = screen.getByText("Click or tap to upload an audio file");
  const titleField = screen.getByPlaceholderText("Enter a title for your sound");
  const descriptionField = screen.getByPlaceholderText("Enter a description for your sound");
  const locationField = screen.getByPlaceholderText("Please provide location data.");
  const imageField = screen.getByText("Choose image");
  const tagField = screen.getByPlaceholderText("Enter tags as comma-separated values");
  expect(audioField).toBeInTheDocument();
  expect(titleField).toBeInTheDocument();
  expect(descriptionField).toBeInTheDocument();
  expect(locationField).toBeInTheDocument();
  expect(imageField).toBeInTheDocument();
  expect(tagField).toBeInTheDocument();
});

test("user input works as expected", () => {
  renderSoundCreateForm();
  const titleField = screen.getByPlaceholderText("Enter a title for your sound");
  const descriptionField = screen.getByPlaceholderText("Enter a description for your sound");
  const locationField = screen.getByPlaceholderText("Please provide location data.");
  const tagsField = screen.getByPlaceholderText("Enter tags as comma-separated values");
  fireEvent.change(titleField, { target: { value: "Test title" } });
  fireEvent.change(descriptionField, { target: { value: "Test description" } });
  fireEvent.change(tagsField, { target: { value: "test, tags" } });
  expect(titleField.value).toEqual("Test title");
  expect(descriptionField.value).toEqual("Test description");
  expect(tagsField.value).toEqual("test, tags");
});

test("renders submit button", () => {
  renderSoundCreateForm();
  const submitButton = screen.getByRole("button", { name: "Upload Sound" });
  expect(submitButton).toBeInTheDocument();
});

test("shows error message for empty form", async () => {
  renderSoundCreateForm();
  const submitButton = screen.getByRole("button", { name: "Upload Sound" });
  fireEvent.click(submitButton);
  // Documentation: https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
  await waitFor(() => expect(showMessage).toHaveBeenCalledWith("warning", "Upload failed! Please try again."));
});
