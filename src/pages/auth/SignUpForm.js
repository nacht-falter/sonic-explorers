import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Authentication.module.css";
import btnStyles from "../../styles/Button.module.css";
import hr from "../../assets/images/hr-wave.svg";
import image from "../../assets/images/luke-porter-UGX2qdjdKkw-unsplash.jpg";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = (props) => {
  useRedirect("loggedIn");
  const { showMessage } = props;
  const [signUpData, setSignUpData] = useState({ username: "", password1: "", password2: "" });
  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
      showMessage("success", "Account successfully created!");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="mx-auto">
      <Col className="my-auto py-2 p-md-4 p-lg-5" md={6}>
        <h2>Welcome to Sonic Explorers</h2>
        <p>Start exploring the world of sounds</p>
        <img className="d-none d-md-inline" src={image} alt="Woman holding a mobile phone" width="100%" />
        <img className="d-inline d-md-none" src={hr} alt="Horizontal line with sound wave" width="100%" />
      </Col>
      <Col className="my-auto py-2 p-md-4 p-lg-5" md={6}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel className={styles.Label} controlId="floatingInput" label="Username">
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </FloatingLabel>

            {errors.username?.map((msg, i) => (
              <Alert className={styles.Alert} variant="warning" key={i}>
                {msg}
              </Alert>
            ))}

            <FloatingLabel className={styles.Label} controlId="password1" label="Password">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </FloatingLabel>

            {errors.password1?.map((msg, i) => (
              <Alert className={styles.Alert} variant="warning" key={i}>
                {msg}
              </Alert>
            ))}

            <FloatingLabel className={styles.Label} controlId="password2" label="Confirm Password">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </FloatingLabel>

            {errors.password2?.map((msg, i) => (
              <Alert className={styles.Alert} variant="warning" key={i}>
                {msg}
              </Alert>
            ))}

            {errors.non_field_errors?.map((msg, i) => (
              <Alert className={styles.Alert} variant="warning" key={i}>
                {msg}
              </Alert>
            ))}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
        <Container>
          <img className="d-none d-md-inline mt-4" src={hr} alt="Horizontal line with sound wave" width="100%" />
          <Link className={`${styles.Link} mt-4`} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <hr className="d-none d-md-inline mt-5" />
    </Row>
  );
};

export default SignUpForm;
