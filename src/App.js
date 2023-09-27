import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <TopNavBar />
      <BottomNavBar />
    </div>
  );
}

export default App;
