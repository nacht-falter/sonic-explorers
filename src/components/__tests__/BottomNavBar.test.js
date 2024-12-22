import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BottomNavBar from "../BottomNavBar";

test("renders BottomNavBar", () => {
  render(
    <BrowserRouter>
      <BottomNavBar />
    </BrowserRouter>
  );

  expect(screen.getByText("Explore")).toBeInTheDocument();
  expect(screen.getByText("Map")).toBeInTheDocument();
  expect(screen.getByText("Feed")).toBeInTheDocument();
  expect(screen.getByText("Favourites")).toBeInTheDocument();
  expect(screen.getByText("News")).toBeInTheDocument();
});

test("nav links work correctly", () => {
  render(
    <BrowserRouter>
      <BottomNavBar />
    </BrowserRouter>
  );

  const exploreLink = screen.getByText("Explore");
  fireEvent.click(exploreLink);

  // Assert that links navigate to new url. Instructions from:
  // https://www.joshmcarthur.com/til/2022/01/19/assert-windowlocation-properties-with-jest.html
  expect(window.location.pathname).toBe("/");

  const mapLink = screen.getByText("Map");
  fireEvent.click(mapLink);
  expect(window.location.pathname).toBe("/map");

  const feedLink = screen.getByText("Feed");
  fireEvent.click(feedLink);
  expect(window.location.pathname).toBe("/feed");

  const favouritesLink = screen.getByText("Favourites");
  fireEvent.click(favouritesLink);
  expect(window.location.pathname).toBe("/favourites");

  const newsLink = screen.getByText("News");
  fireEvent.click(newsLink);
  expect(window.location.pathname).toBe("/news");
});
