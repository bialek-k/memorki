import React, { useState, useContext } from "react";

import Modal from "./components/Modals/Modal";

import { GameContext } from "./store/game-context";

import styles from "./App.module.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";
import NewPlayer from "./components/Modals/NewPlayer/NewPlayer";

function App() {
  const { finishGame } = useContext(GameContext);
  const [showModal, setShowModal] = useState(false);

  if (finishGame) {
    return (
      <div>
        <h1>KONIEC GRY</h1>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <div className={styles.game}>
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <NewPlayer />
          </Modal>
        )}
        <Player />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
