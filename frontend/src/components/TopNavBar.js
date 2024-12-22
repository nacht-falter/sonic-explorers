import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import styles from "../styles/TopNavBar.module.css";
import btnStyles from "../styles/Button.module.css";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import Avatar from "../components/Avatar";
import { removeTokenTimestamp } from "../utils/utils";

const TopNavBar = (props) => {
  const { showMessage } = props;
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      showMessage("success", "Successfully signed out!");
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedInNavItems = (
    <Nav className="d-flex align-items-center">
      <NavLink exact className="me-2 me-md-5" activeClassName={styles.Active} to="/sounds/create">
        <Button
          className={`${btnStyles.Button} ${btnStyles.Small} d-flex align-items-center px-3 py-2 rounded-5`}
          variant="dark"
        >
          <i className="fa-solid fa-microphone-lines fs-6"></i>
          <span className="ms-2">Upload sound</span>
        </Button>
      </NavLink>
      <NavDropdown
        className={styles.Dropdown}
        drop="down"
        align="end"
        title={<Avatar src={currentUser?.profile_avatar} text={currentUser?.username} height={25} />}
        id="userDropdownMenu"
      >
        <Dropdown.Item as="span">
          <NavLink
            to={`/profiles/${currentUser?.profile_id}`}
            className="d-flex align-items-center"
            activeClassName={styles.ActiveDropdownItem}
          >
            <Avatar src={currentUser?.profile_avatar} text="My Profile" height={20} />
          </NavLink>
        </Dropdown.Item>
        <NavDropdown.Divider />
        {currentUser?.is_staff && (
          <>
            <Dropdown.Item as="span">
              <NavLink to="/reports/" className="d-flex align-items-center" activeClassName={styles.ActiveDropdownItem}>
                <i className="fa-solid fa-flag me-2"></i>Reports
              </NavLink>
            </Dropdown.Item>
            <NavDropdown.Divider />
          </>
        )}
        <Dropdown.Item as="span">
          <NavLink to="/" onClick={handleSignOut} className="d-flex align-items-center">
            <i className="fa-solid fa-right-from-bracket fs-6 me-2"></i>Sign out
          </NavLink>
        </Dropdown.Item>
      </NavDropdown>
    </Nav>
  );

  const loggedOutNavItems = (
    <Nav>
      <NavLink exact to="/signin" activeClassName={styles.ActiveSignInButton}>
        <Button className={styles.SignInButton} variant="outline-dark" size="sm">
          Sign In
        </Button>
      </NavLink>
      <NavLink exact to="/signup" activeClassName={styles.ActiveSignUpButton}>
        <Button className={styles.SignUpButton} variant="dark" size="sm">
          Sign Up
        </Button>
      </NavLink>
    </Nav>
  );

  return (
    <Navbar className={styles.TopNavBar} fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img className={styles.Logo} src={logo} alt="Logo" height="100" />
            <h1 className={`${styles.Title} d-inline align-middle`}>Sonic Explorers</h1>
          </Navbar.Brand>
        </NavLink>
        {currentUser ? loggedInNavItems : loggedOutNavItems}
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
