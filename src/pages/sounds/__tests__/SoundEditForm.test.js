import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import SoundEditForm from "../SoundEditForm";

// Jest documentation for mock functions: https://jestjs.io/docs/mock-function-api
const showMessage = jest.fn();
const renderSoundEditForm = () => {
  render(
    // Instructions for passing for mocking useParams: https://stackoverflow.com/a/72053411
    <MemoryRouter initialEntries={["/sounds/1/edit"]}>
      <Route path="/sounds/:id/edit">
        <SoundEditForm showMessage={showMessage} />
      </Route>
    </MemoryRouter>
  );
};

test("renders SoundEditForm with all fields", async () => {
  renderSoundEditForm();
  const titleField = await screen.findByPlaceholderText("Enter a title for your sound");
  const descriptionField = await screen.findByPlaceholderText("Enter a description for your sound");
  const locationField = await screen.findByPlaceholderText("123.123,123.123");
  const imageField = await screen.findByText("Change image");
  const tagField = await screen.findByPlaceholderText("Enter tags as comma-separated values");
  const tag1 = await screen.findByText("tag1");
  const tag2 = await screen.findByText("tag2");
  expect(titleField).toBeInTheDocument();
  expect(descriptionField).toBeInTheDocument();
  expect(locationField).toBeInTheDocument();
  expect(imageField).toBeInTheDocument();
  expect(tagField).toBeInTheDocument();
  expect(tag1).toBeInTheDocument();
  expect(tag2).toBeInTheDocument();
});

test("user input works as expected", async () => {
  renderSoundEditForm();
  const titleField = await screen.findByPlaceholderText("Enter a title for your sound");
  const descriptionField = await screen.findByPlaceholderText("Enter a description for your sound");
  const tagsField = await screen.findByPlaceholderText("Enter tags as comma-separated values");
  fireEvent.change(titleField, { target: { value: "Test sound" } });
  fireEvent.change(descriptionField, { target: { value: "Test description" } });
  fireEvent.change(tagsField, { target: { value: "test, tags" } });
  expect(titleField.value).toEqual("Test sound");
  expect(descriptionField.value).toEqual("Test description");
  expect(tagsField.value).toEqual("test, tags");
});

test("shows success message on submit", async () => {
  renderSoundEditForm();
  const submitButton = await screen.findByRole("button", { name: "Update Sound" });
  fireEvent.click(submitButton);
  // Documentation: https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
  await waitFor(() => expect(showMessage).toHaveBeenCalledWith("success", "Sound successfully updated!"));
});
