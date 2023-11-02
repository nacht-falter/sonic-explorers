import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";

const StaffOnlyMessage = () => {
  const history = useHistory();
  return (
    <Card className={`mx-auto mt-5 ${appStyles.MessageCard}`}>
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
