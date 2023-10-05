import React, { useState, useEffect } from "react";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Message from "./components/Message";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import SoundCreateForm from "./pages/sounds/SoundCreateForm";
import SoundPage from "./pages/sounds/SoundPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import SoundListPage from "./pages/sounds/SoundListPage";
import Asset from "./components/Asset";

function App() {
  const currentUser = useCurrentUser();
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    if (currentUser !== null) {
      setProfileId(currentUser.profile_id);
    }
  }, [currentUser]);

  const [message, setMessage] = useState(null);

  const showMessage = (type, text) => {
    setMessage({ type, text });

    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  return (
    <div className={styles.App}>
      {message && <Message type={message.type} text={message.text} />}
      <TopNavBar showMessage={showMessage} />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <SoundListPage message="Nothing to see here. Try searching for something else." />}
          />
          <Route exact path="/map" render={() => {}} />
          <Route
            exact
            path="/feed"
            render={() =>
              profileId ? (
                <SoundListPage
                  heading="Sounds by people you follow"
                  message="No results. Try searching for something else or start following someone."
                  filter={`following=${profileId}&`}
                />
              ) : (
                <Asset spinner />
              )
            }
          />
          <Route
            exact
            path="/favourites"
            render={() =>
              profileId ? (
                <SoundListPage
                  heading="Sounds you like"
                  message="No results. Try searching for something else or like some sounds."
                  filter={`liked=${profileId}&ordering=-likes__created_at&`}
                />
              ) : (
                <Asset spinner />
              )
            }
          />
          <Route exact path="/signin" render={() => <SignInForm showMessage={showMessage} />} />
          <Route exact path="/signup" render={() => <SignUpForm showMessage={showMessage} />} />
          <Route exact path="/profiles/:id" render={() => {}} />
          <Route exact path="/sounds/create" render={() => <SoundCreateForm showMessage={showMessage} />} />
          <Route exact path="/sounds/:id" render={() => <SoundPage />} />
          <Route exact path="/news" render={() => {}} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Container>
      <BottomNavBar />
    </div>
  );
}

export default App;
