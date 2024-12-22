import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useHistory, useParams } from "react-router-dom";
import { axiosResponse } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const PasswordForm = ({ showMessage }) => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser) {
      if (currentUser?.profile_id?.toString() !== id) {
        showMessage("warning", "You are not allowed to change this password.");
        history.push("/");
      }
    }
  }, [currentUser, history, id, showMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosResponse.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <h4 className="mb-3">Change password</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FloatingLabel controlId="floatingPassword2" label="New Password" className="mb-3 text-muted">
                <Form.Control
                  placeholder="new password"
                  type="password"
                  value={new_password1}
                  onChange={handleChange}
                  name="new_password1"
                />
              </FloatingLabel>
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert className={`${appStyles.SmallText}`} key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <FloatingLabel controlId="floatingPassword2" label="Confirm password" className="mb-3 text-muted">
                <Form.Control
                  placeholder="confirm new password"
                  type="password"
                  value={new_password2}
                  onChange={handleChange}
                  name="new_password2"
                />
              </FloatingLabel>
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
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
              Set new password
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default PasswordForm;
