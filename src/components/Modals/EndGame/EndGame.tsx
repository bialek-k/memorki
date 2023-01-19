import React, { useContext } from "react";
import { GameContext } from "../../../store/game-context";
import styles from "./EndGame.module.scss";

const EndGame = () => {
  const { finalTime, setFinishGame, flipBackCards, setResetTimer } =
    useContext(GameContext);

  // const closeModalHandler = () => finishGame && setFinishGame(false);

  const playAgainHandler = () => {
    flipBackCards();
    setFinishGame(false);
    setResetTimer(true);
  };

  return (
    <div className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.stats}>
            <h1>Koniec GRY!</h1>
            <div className={styles.time}>
              <p>Twój czas:</p>
              <div className={styles.timer}>
                <span>
                  {("0" + Math.floor((finalTime / 60000) % 60)).slice(-1)}:
                </span>
                <span>
                  {("0" + Math.floor((finalTime / 1000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + ((finalTime / 10) % 100)).slice(-2)}</span>
              </div>
            </div>
          </div>
          <div className={styles.action}>
            <button onClick={playAgainHandler}>Powtórz grę</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
