import React, { useContext } from "react";
import styles from "./Player.module.css";

import { GameContext } from "../../store/game-context";

const Player = () => {
  const { player, points } = useContext(GameContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{player}</h1>
        <div className={styles.points}>
          <p>Points:</p>
          <span>{points}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
