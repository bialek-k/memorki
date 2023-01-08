import React, { useContext } from "react";
import styles from "./Card.module.css";

import logo from "../../assets/png/logo.png";

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
      onClick={changeCardSide.bind(null, id, image)}
    >
      <div className={styles.image}>
        {id}
        <img src={flipped ? logo : image} alt="dog" />
      </div>
    </div>
  );
};

export default Card;
