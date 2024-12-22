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
import image from "../../assets/images/bruno-aguirre-wOWgGnf1Gng-unsplash.jpg";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

const SignInForm = (props) => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");
  const { showMessage } = props;
  const [signInData, setSignInData] = useState({ username: "", password: "" });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      showMessage("success", "Successfully logged in as " + data.user.username + "!");
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className="mx-auto">
      {navigator.userAgent.includes("Safari") && (
        <Alert className={styles.Alert} variant="warning" dismissible>
          Sign in is currently not supported on Safari with Cross-Site Tracking Protection enabled. Please make sure
          Cross-Site Tracking Protection is disabled in your Safari settings or use a different browser.
        </Alert>
      )}
      <Col className="my-auto py-2 p-md-4 p-lg-5" md={6}>
        <h2>Welcome back</h2>
        <p>Continue your sonic explorations</p>
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

            <FloatingLabel className={styles.Label} controlId="password" label="Password">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FloatingLabel>

            {errors.password?.map((msg, i) => (
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
              Sign In
            </Button>
          </Form>
        </Container>
        <Container>
          <img className="d-none d-md-inline mt-4" src={hr} alt="Horizontal line with sound wave" width="100%" />
          <Link className={`${styles.Link} mt-4`} to="/signup">
            Don't have an account yet? <span>Sign up</span>
          </Link>
        </Container>
      </Col>
      <hr className="d-none d-md-inline mt-5" />
    </Row>
  );
};

export default SignInForm;
