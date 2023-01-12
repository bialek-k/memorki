import React, { useState, useContext } from "react";
import styles from "./App.module.scss";

import { GameContext } from "./store/game-context";

import { ReactComponent as SettingsIcon } from "./assets/settings.svg";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";
import NewPlayer from "./components/Modals/NewPlayer/NewPlayer";
import Settings from "./components/Modals/Settings/Settings";

function App() {
  const { finishGame } = useContext(GameContext);
  const [showNewPlayer, setShowNewPlayer] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  if (showNewPlayer) {
    return (
      <div className={styles.app}>
        <NewPlayer setShowNewPlayer={setShowNewPlayer} />
      </div>
    );
  }

  if (finishGame) {
    return (
      <div>
        <h1>KONIEC GRY</h1>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      {showSetting && <Settings setShowSetting={setShowSetting} />}
      <SettingsIcon
        fill="white"
        stroke="white"
        strokeWidth="15"
        className={styles.settingsBtn}
        onClick={() => setShowSetting(true)}
      />
      <div className={styles.game}>
        <Player />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
