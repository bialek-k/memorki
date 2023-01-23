import React, { useState, useEffect, useContext } from "react";

import { GameContext } from "../../../store/game-context";
import styles from "./Timer.module.scss";

export const Timer = () => {
  const { timerIsRunning, resetTimer, setFinalTime } = useContext(GameContext);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any;

    if (timerIsRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    if (!timerIsRunning) {
      setFinalTime(time);
      clearInterval(interval);
    }

    if (resetTimer) {
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [timerIsRunning, resetTimer]);

  return (
    <div className={styles.timer}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-1)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};
