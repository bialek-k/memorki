import React, { useContext } from "react";
import styles from "./Player.module.css";

import { GameContext } from "../../store/game-context";
import Timer from "./Timer/Timer";

interface PlayerProps {
  setShowNewPlayer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Player = ({ setShowNewPlayer }: PlayerProps) => {
  const { player } = useContext(GameContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 onClick={() => setShowNewPlayer(true)}>{player}</h1>
        <Timer />
      </div>
    </div>
  );
};

export default Player;
