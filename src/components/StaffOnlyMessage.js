import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Button.module.css";

const StaffOnlyMessage = () => {
  const history = useHistory();
  return (
    <Card className="w-50 mx-auto m-5">
      <Card.Header as="h4">You are not authorised to view this page</Card.Header>
      <Card.Body>
        <Card.Text>Only users with staff privileges can view this page.</Card.Text>
        <Button onClick={history.goBack} className={`btn ${btnStyles.Button} ${btnStyles.Narrow}`}>
          Go back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StaffOnlyMessage;
