import React, { useState } from "react";

import NewPlayer from "./components/Modals/NewPlayer";

import styles from "./App.module.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className={styles.app}>
      <div className={styles.game}>
        {showModal && <NewPlayer setShowModal={setShowModal} />}
        <Player />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
