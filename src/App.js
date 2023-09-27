import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <TopNavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => {}} /> 
          <Route exact path="/signin" render={() => {}} />
          <Route exact path="/signup" render={() => {}} />
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
