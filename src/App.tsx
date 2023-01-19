import React, { useState, useContext, useEffect } from "react";
import styles from "./App.module.scss";

import { motion } from "framer-motion";

import { GameContext } from "./store/game-context";

import { ReactComponent as SettingsIcon } from "./assets/settings.svg";
import { ReactComponent as RefreshIcon } from "./assets/refresh.svg";

import Ryder from "./assets/png/ryder.png";

import CardBoard from "./components/CardBoard/CardBoard";
import Player from "./components/Player/Player";
import NewPlayer from "./components/Modals/NewPlayer/NewPlayer";
import Settings from "./components/Modals/Settings/Settings";
import Background from "./components/Background/Background";
import EndGame from "./components/Modals/EndGame/EndGame";

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

  return (
    <Background>
      <div className={styles.app}>
        {finishGame && <EndGame />}
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
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshIcon
                    fill="white"
                    stroke="white"
                    strokeWidth="15"
                    className={styles.settingsBtn}
                    onClick={refreshHandler}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SettingsIcon
                    fill="white"
                    stroke="white"
                    strokeWidth="15"
                    className={styles.settingsBtn}
                    onClick={() => setShowSetting(true)}
                  />
                </motion.div>
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
