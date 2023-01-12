import React, { useContext, useEffect } from "react";
import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

import { GameContext } from "../../store/game-context";

const CardBoard = () => {
  const { cards, flipBackCards } = useContext(GameContext);

  useEffect(() => {
    flipBackCards();
  }, []);

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
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
