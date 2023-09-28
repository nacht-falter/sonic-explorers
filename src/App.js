import React, { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Message from "./components/Message";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";

function App() {
  const [message, setMessage] = useState(null);

  const showMessage = (type, text) => {
    setMessage({ type, text });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div className={styles.App}>
      {message && <Message type={message.type} text={message.text} />}
      <TopNavBar showMessage={showMessage} />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => {}} />
          <Route exact path="/signin" render={() => <SignInForm showMessage={showMessage} />} />
          <Route exact path="/signup" render={() => <SignUpForm showMessage={showMessage} />} />
          <Route exact path="/profiles/:id" render={() => {}} />
          <Route exact path="/feed" render={() => {}} />
          <Route exact path="/map" render={() => {}} />
          <Route exact path="/favourites" render={() => {}} />
          <Route exact path="/news" render={() => {}} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Container>
      <BottomNavBar />
    </div>
  );
}

export default App;
