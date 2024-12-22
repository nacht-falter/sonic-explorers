import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useHistory, useParams } from "react-router-dom";
import { axiosResponse } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

const UsernameForm = ({ showMessage }) => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser) {
      if (currentUser?.profile_id?.toString() === id) {
        setUsername(currentUser.username);
      } else {
        history.push("/");
        showMessage("warning", "You are not allowed to change this username.");
      }
    }
  }, [currentUser, history, id, showMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === currentUser.username) {
      history.goBack();
    } else {
      try {
        await axiosResponse.put("/dj-rest-auth/user/", {
          username,
        });
        setCurrentUser((prevUser) => ({
          ...prevUser,
          username,
        }));
        history.goBack();
      } catch (err) {
        // console.log(err);
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <h4 className="mb-3">Change username</h4>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3 text-muted">
                <Form.Control
                  placeholder="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert className={`${appStyles.SmallText}`} key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Small} ${btnStyles.Narrow} btn-secondary me-2 mt-2`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Small} ${btnStyles.Narrow} mt-2`} type="submit">
              Save new username
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
