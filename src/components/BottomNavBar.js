import React from "react";
import { Navbar, Container, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BottomNavBar = () => {
  return (
    <Navbar fixed="bottom">
      <Container>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-magnifying-glass-location"></i>
            <span>Explore</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-radio"></i>
            <span>Feed</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-map-location"></i>
            <span>Map</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-heart-pulse"></i>
            <span>Favourites</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-bell"></i>
            <span>News</span>
          </Stack>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default BottomNavBar;
