import React from "react";

import { useEffect, useContext } from "react";
import styles from "./App.module.css";

import { GameContext } from "./store/game-context";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";

function App() {
  const { initialCards, flipBackCards } = useContext(GameContext);

  //Flip cards on the start game
  useEffect(() => {
    flipBackCards();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.game}>
        <Player playerName="Igor" points={24} />
        <CardBoard cards={initialCards} />
      </div>
    </div>
  );
}

export default App;
