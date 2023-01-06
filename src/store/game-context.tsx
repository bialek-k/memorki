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
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  initialCards: [],
  flipBackCards: () => {},
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
    }, 5000);
  };

  const contextValue: any = { initialCards, flipBackCards };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
