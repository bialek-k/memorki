import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as Close } from "../../../assets/close.svg";
import { GameContext } from "../../../store/game-context";

import styles from "./EndGame.module.scss";

const EndGame = () => {
  const { finishGame, setFinishGame } = useContext(GameContext);

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
          <h1>Koniec GRY!</h1>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
