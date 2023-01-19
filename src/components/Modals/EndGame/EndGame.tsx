import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as Close } from "../../../assets/close.svg";
import { GameContext } from "../../../store/game-context";

import styles from "./EndGame.module.scss";

const EndGame = () => {
  const { finishGame, setFinishGame, setResetGame } = useContext(GameContext);

  // const closeModalHandler = () => finishGame && setFinishGame(false);

  return (
    <div className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
        <div className={styles.content}>
          <Close
            onClick={() => setFinishGame(false)}
            className={styles.closeBtn}
            fill="white"
            stroke="white"
            strokeWidth="10"
          />
          <div className={styles.stats}>
            <h1>Koniec GRY!</h1>
            <div className={styles.time}>
              <p>Twój czas:</p>
              <span>01:12:32</span>
            </div>
          </div>
          <div className={styles.action}>
            <button onClick={() => setResetGame(true)}>Powtórz grę</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
