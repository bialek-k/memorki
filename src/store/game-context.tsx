import React, { createContext, useState } from "react";

import { DUMMY_CARDS } from "../utilities/cards";

type CardObj = {
  color: string;
  id: number;
  flipped: boolean;
};

type GameContextObj = {
  cards: CardObj[];
  initialCards: [];
  flipBackCards: () => void;
  flipClickedCard: () => void;
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  initialCards: [],
  flipBackCards: () => {},
  flipClickedCard: () => {},
});

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initialCards, setInitialCards] = useState(DUMMY_CARDS);

  const flipBackCards = () => {
    setTimeout(() => {
      const flipped = initialCards.map((singleCard) => {
        return {
          ...singleCard,
          flipped: !singleCard.flipped,
        };
      });
      setInitialCards(flipped);
    }, 1000);
  };

  const flipClickedCard = (id: number) => {
    const changedArr: any = initialCards.map((card) => {
      if (card.id === id) {
        const changed = {
          ...card,
          flipped: !card.flipped,
        };
        return changed;
      }
      return card;
    });

    setInitialCards(changedArr);
  };

  const contextValue: any = { initialCards, flipBackCards, flipClickedCard };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
