import React, { useContext, useEffect } from "react";
import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

import { GameContext } from "../../store/game-context";

const CardBoard = () => {
  const { initialCards, flipBackCards, flipClickedCard } =
    useContext(GameContext);

  //Flip cards on the game start
  useEffect(() => {
    flipBackCards();
  }, []);

  return (
    <div className={styles.cardBoard}>
      {initialCards.map((card: CardProps) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            flipped={card.flipped}
            color={card.color}
            onClickHandler={flipClickedCard}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
