import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import styles from "../../styles/Authentication.module.css";
import btnStyles from "../../styles/Button.module.css";
import hr from "../../assets/images/hr-wave.svg";
import image from "../../assets/images/luke-porter-UGX2qdjdKkw-unsplash(1).jpg";

const SignUpForm = () => {
  return (
    <Row className="mx-auto">
      <Col className="my-auto py-2 p-md-4 p-lg-5" md={6}>
        <h2>Welcome to Sonic Explorers</h2>
        <p>Start exploring the world of sounds</p>
        <img className="d-none d-md-inline" src={image} alt="Man holding a mobile phone" width="100%" />
        <img className="d-inline d-md-none" src={hr} alt="Woman holding a mobile phone" width="100%" />
      </Col>
      <Col className="my-auto py-2 p-md-4 p-lg-5" md={6}>
        <Container>
          <Form>
            <FloatingLabel className={styles.Label} controlId="floatingInput" label="Username">
              <Form.Control className={styles.Input} type="email" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel className={styles.Label} controlId="password2" label="Password">
              <Form.Control className={styles.Input} type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel className={styles.Label} controlId="password2" label="Confirm Password">
              <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" />
            </FloatingLabel>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
        <Container>
        <img className="d-none d-md-inline mt-4" src={hr} alt="Woman holding a mobile phone" width="100%" />
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
