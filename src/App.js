import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { Route, Switch } from "react-router-dom";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import "./api/axiosDefaults";

import Message from "./components/Message";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import SoundCreateForm from "./pages/sounds/SoundCreateForm";
import SoundPage from "./pages/sounds/SoundPage";
import SoundListPage from "./pages/sounds/SoundListPage";
import SoundEditForm from "./pages/sounds/SoundEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import PasswordForm from "./pages/profiles/PasswordForm";
import NotificationPage from "./pages/notifications/NotificationPage";
import Map from "./pages/map/Map";
import ReportPage from "./pages/reports/ReportPage";
import NoResults from "./assets/images/no-results512.png";
import Asset from "./components/Asset";

import styles from "./App.module.css";
 
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
            render={() => (
              <SoundListPage
                heading="Explore all Sounds"
                message="Nothing to see here. Try searching for something else."
              />
            )}
          />
          <Route exact path="/map" render={() => <Map />} />
          <Route
            exact
            path="/feed"
            render={() => (
              <SoundListPage
                heading="Sounds by people you follow"
                message="No results. Try searching for something else or start following someone."
                filter={`following=${profileId}&`}
              />
            )}
          />
          <Route
            exact
            path="/favourites"
            render={() => (
              <SoundListPage
                heading="Sounds you like"
                message="No results. Try searching for something else or like some sounds."
                filter={`liked=${profileId}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm showMessage={showMessage} />} />
          <Route exact path="/signup" render={() => <SignUpForm showMessage={showMessage} />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/sounds/create" render={() => <SoundCreateForm showMessage={showMessage} />} />
          <Route exact path="/sounds/:id" render={() => <SoundPage />} />
          <Route exact path="/sounds/:id/edit" render={() => <SoundEditForm showMessage={showMessage} />} />
          <Route exact path="/news" render={() => <NotificationPage showMessage={showMessage} />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm showMessage={showMessage} />} />
          <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm showMessage={showMessage} />} />
          <Route exact path="/profiles/:id/edit/password" render={() => <PasswordForm showMessage={showMessage} />} />
          <Route exact path="/reports/" render={() => <ReportPage showMessage={showMessage} />} />
          <Route render={() => <Asset img={NoResults} message="The page you are looking for does not exist." />} />
        </Switch>
      </Container>
      <BottomNavBar />
    </div>
  );
}

export default App;
