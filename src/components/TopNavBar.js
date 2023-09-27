import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import styles from "../styles/TopNavBar.module.css";

const TopNavBar = () => {
  return (
    <Navbar className={styles.TopNavBar} fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img className={styles.Logo} src={logo} alt="Logo" height="100" />
            <h1 className={`${styles.Title} d-inline align-middle`}>Sonic Explorers</h1>
          </Navbar.Brand>
        </NavLink>
        <Nav>
          <NavLink exact to="/signin">
            <Button className={styles.SignInButton} variant="outline-dark" size="sm">
              Sign In
            </Button>
          </NavLink>
          <NavLink exact to="/signup">
            <Button className={styles.SignUpButton} variant="dark" size="sm">
              Sign Up
            </Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
