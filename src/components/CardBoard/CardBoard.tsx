import React, { useContext, useEffect } from "react";
import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

import { GameContext } from "../../store/game-context";
import useLocalStorage from "../../hooks/useLocalStorage";

const CardBoard = () => {
  const { cards, flipBackCards } = useContext(GameContext);
  const [value] = useLocalStorage("open-time");

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
