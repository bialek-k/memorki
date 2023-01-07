import React, { createContext, useState } from "react";

import { CardsIcons } from "../utilities/cards";

type CardsIconsType = {
  image: string;
  id: number;
  flipped: boolean;
};

type GameContextObj = {
  cards: [];
  flipBackCards: () => void;
  changeCardSide: () => void;
  player: string;
  points: number;
  setPoints: () => void;
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  flipBackCards: () => {},
  changeCardSide: () => {},
  player: "",
  points: 0,
  setPoints: () => {},
});

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState(CardsIcons);
  const [player, setPlayer] = useState("Igor");
  const [points, setPoints] = useState(0);

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

  const changeCardSide = (id: number, image: string) => {
    console.log(image);
    const newArr = cards.map((card: CardsIconsType) => {
      if (card.id === id) {
        const newSide = {
          ...card,
          flipped: !card.flipped,
        };
        return newSide;
      }
      return card;
    });
    setCards(newArr);
  };

  const contextValue: any = {
    cards,
    flipBackCards,
    changeCardSide,
    player,
    setPlayer,
    points,
    setPoints,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
