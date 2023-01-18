import React, { useState, useContext, useEffect } from "react";
import styles from "./App.module.scss";

import { GameContext } from "./store/game-context";

import { ReactComponent as SettingsIcon } from "./assets/settings.svg";
import { ReactComponent as RefreshIcon } from "./assets/refresh.svg";

import Ryder from "./assets/png/ryder.png";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";
import NewPlayer from "./components/Modals/NewPlayer/NewPlayer";
import Settings from "./components/Modals/Settings/Settings";
import Background from "./components/Background/Background";

function App() {
  const {
    finishGame,
    player,
    flipBackCards,
    setTimerIsRunning,
    setResetTimer,
  } = useContext(GameContext);

  const [showNewPlayer, setShowNewPlayer] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const refreshHandler = () => {
    flipBackCards();
    setTimerIsRunning(false);
    setResetTimer(true);
  };

  useEffect(() => {
    flipBackCards();
    const localData = localStorage.getItem("player");
    if (localData == null) {
      setShowNewPlayer(true);
    }
  }, []);

  if (finishGame) {
    return (
      <div>
        <h1>KONIEC GRY</h1>
      </div>
    );
  }

  return (
    <Background>
      <div className={styles.app}>
        {showNewPlayer && (
          <NewPlayer
            setShowNewPlayer={setShowNewPlayer}
            showNewPlayer={showNewPlayer}
          />
        )}
        {player !== "" && (
          <>
            {showSetting && <Settings setShowSetting={setShowSetting} />}
            <div className={styles.game}>
              <div className={styles.settingIcon}>
                <RefreshIcon
                  fill="white"
                  stroke="white"
                  strokeWidth="15"
                  className={styles.settingsBtn}
                  onClick={refreshHandler}
                />
                <SettingsIcon
                  fill="white"
                  stroke="white"
                  strokeWidth="15"
                  className={styles.settingsBtn}
                  onClick={() => setShowSetting(true)}
                />
              </div>
              <Player setShowNewPlayer={setShowNewPlayer} />
              <CardBoard />
              <img src={Ryder} alt="ryder" className={styles.ryder} />
            </div>
          </>
        )}
      </div>
    </Background>
  );
}

export default App;
