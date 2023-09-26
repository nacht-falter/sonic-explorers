import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const TopNavBar = () => {
  return (
    <Navbar fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img className="d-none d-md-inline" src={logo} alt="Logo" height="100" />
            <h1 className="d-none d-md-inline ps-3 align-middle">Sonic Explorers</h1>
            <img className="d-md-none" src={logo} alt="Logo" height="75" />
          </Navbar.Brand>
        </NavLink>
        <Nav className="">
          <NavLink exact to="/signin">
            <Button variant="dark" size="sm">
              Sign In
            </Button>
          </NavLink>
          <NavLink className="align-middle" exact to="/signup">
            Sign Up
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
