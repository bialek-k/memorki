import React, { useState, useContext } from "react";
import styles from "./App.module.scss";

import { GameContext } from "./store/game-context";

import { ReactComponent as SettingsIcon } from "./assets/settings.svg";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";
import NewPlayer from "./components/Modals/NewPlayer/NewPlayer";
import Settings from "./components/Modals/Settings/Settings";

function App() {
  const { finishGame, player } = useContext(GameContext);
  const [showNewPlayer, setShowNewPlayer] = useState(true);
  const [showSetting, setShowSetting] = useState(false);

  if (showNewPlayer && player === "") {
    return (
      <div className={styles.app}>
        <NewPlayer
          setShowNewPlayer={setShowNewPlayer}
          showNewPlayer={showNewPlayer}
        />
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
      <div className={styles.game}>
        <div className={styles.settingIcon}>
          <SettingsIcon
            fill="white"
            stroke="white"
            strokeWidth="15"
            className={styles.settingsBtn}
            onClick={() => setShowSetting(true)}
          />
        </div>
        <Player />
        <CardBoard />
      </div>
    </div>
  );
}

export default App;
