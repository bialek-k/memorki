import React from "react";

import styles from "./App.module.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.game}>
        <Player />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
