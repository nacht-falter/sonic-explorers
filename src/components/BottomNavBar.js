import React from "react";
import { Navbar, Container, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/BottomNavBar.module.css";

const BottomNavBar = () => {
  return (
    <Navbar className={styles.BottomNavBar} fixed="bottom">
      <Container className={styles.Container}>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-magnifying-glass-location"></i>
            <span className={styles.NavItemText}>Explore</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-radio"></i>
            <span className={styles.NavItemText}>Feed</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-map-location"></i>
            <span className={styles.NavItemText}>Map</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-heart-pulse"></i>
            <span className={styles.NavItemText}>Favourites</span>
          </Stack>
        </NavLink>
        <NavLink to="/">
          <Stack className="text-center">
            <i className="fa-solid fa-bell"></i>
            <span className={styles.NavItemText}>News</span>
          </Stack>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default BottomNavBar;
