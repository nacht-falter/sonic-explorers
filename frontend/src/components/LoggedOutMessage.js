import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";

const LoggedOutMessage = () => {
  return (
    <Card className={`mx-auto mt-5 ${appStyles.MessageCard}`}>
      <Card.Header as="h4">You are signed out</Card.Header>
      <Card.Body>
        <Card.Text>Please sign in to view this page.</Card.Text>
        <Link to="/signin" className={`btn text-light ${btnStyles.Button} ${btnStyles.Narrow}`}>
          Sign in
        </Link>
      </Card.Body>
    </Card>
  );
};

export default LoggedOutMessage;
