import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import btnStyles from "../styles/Button.module.css";

const LoggedOutMessage = () => {
  return (
    <Card className="w-50 mx-auto m-5">
      <Card.Header as="h4">You are signed out</Card.Header>
      <Card.Body>
        <Card.Text>Please sign in to view this page.</Card.Text>
        <Link to="/signin" className={`btn ${btnStyles.Button} ${btnStyles.Narrow}`}>
          Sign in
        </Link>
      </Card.Body>
    </Card>
  );
};

export default LoggedOutMessage;
