import React, { useContext, useEffect, useState } from "react";
import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

import { GameContext } from "../../store/game-context";

const CardBoard = () => {
  const { cards, flipBackCards } = useContext(GameContext);
  const [pickId, setPickId] = useState<number>();

  //Flip cards on the game start
  useEffect(() => {
    flipBackCards();
  }, []);

  const flipClickedCard = (id: number) => {
    setPickId(id);
  };

  const displayCardsGrid = () => {
    let showCards = [];

    // const clickedCard = cards.filter((card: CardProps) => card.id === pickId);

    const newArr = cards.map((card: CardProps) => {
      if (card.id === pickId) {
        const newCard = {
          ...card,
          flipped: !card.flipped,
        };
        return newCard;
      }
      return card;
    });

    showCards = [...newArr];
    return newArr;
  };

  return (
    <div className={styles.cardBoard}>
      {displayCardsGrid().map((card: CardProps) => {
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
