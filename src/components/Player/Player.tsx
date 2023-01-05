import React from "react";

import styles from "./Player.module.css";

export type PlayerProps = {
  playerName: string;
  points: number;
};

const Player = ({ playerName, points }: PlayerProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{playerName}</h1>
        <div className={styles.points}>
          <p>Points:</p>
          <span>{points}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
