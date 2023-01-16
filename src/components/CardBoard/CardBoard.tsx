import React, { useContext } from "react";
import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

import { GameContext } from "../../store/game-context";

const CardBoard = () => {
  const { cards } = useContext(GameContext);
  return (
    <div className={styles.cardBoard}>
      {cards.map((card: CardProps) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            flipped={card.flipped}
            image={card.image}
            matched={card.matched}
            selected={card.selected}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
