import { useState, useContext } from "react";
import styles from "./App.module.css";

import { DUMMY_CARDS } from "./utilities/cards";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.game}>
        <Player playerName="Igor" points={24} />
        <CardBoard cards={DUMMY_CARDS} />
      </div>
    </div>
  );
}

export default App;
