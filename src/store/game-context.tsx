import React, { createContext, useState } from "react";

import { DUMMY_CARDS } from "../utilities/cards";

type CardObj = {
  color: string;
  id: number;
  flipped: boolean;
};

type GameContextObj = {
  cards: [];
  flipBackCards: () => void;
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  flipBackCards: () => {},
});

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState(DUMMY_CARDS);

  const flipBackCards = () => {
    setTimeout(() => {
      const flipped = cards.map((singleCard) => {
        return {
          ...singleCard,
          flipped: !singleCard.flipped,
        };
      });
      setCards(flipped);
    }, 1000);
  };

  const contextValue: any = { cards, flipBackCards };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
