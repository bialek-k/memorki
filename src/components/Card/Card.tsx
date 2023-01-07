import React, { useContext } from "react";
import styles from "./Card.module.css";

import { GameContext } from "../../store/game-context";

export type CardProps = {
  id: number;
  flipped: boolean;
  image: string;
};

const Card = ({ id, flipped, image }: CardProps) => {
  const { changeCardSide } = useContext(GameContext);

  return (
    <div
      className={styles.card}
      key={id}
      style={flipped ? { background: "#221" } : { backgroundColor: "#333" }}
      onClick={changeCardSide.bind(null, id, image)}
    ></div>
  );
};

export default Card;
