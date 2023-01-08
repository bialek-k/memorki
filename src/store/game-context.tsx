import React, { createContext, useEffect, useState } from "react";

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
  const [firstChoice, setFirstChoice] = useState<CardsIconsType[]>([]);
  const [secondChoice, setSecondChoice] = useState<CardsIconsType[]>([]);
  const [foundedCards, setFoundedCards] = useState<CardsIconsType[]>([]);

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
    const newArr = cards.map((card: CardsIconsType) => {
      if (card.id === id) {
        const newSide = {
          ...card,
          flipped: !card.flipped,
        };
        setCardsHandler(card.id);
        return newSide;
      }
      return card;
    });
    setCards(newArr);
  };

  const setCardsHandler = (id: number) => {
    if (firstChoice.length === 0) {
      const firstCard = cards.filter((card) => card.id === id);
      setFirstChoice(firstCard);
    } else {
      const secondCard = cards.filter((card) => card.id === id);
      setSecondChoice(secondCard);
    }
  };

  useEffect(() => {
    if (firstChoice.length === 1 && secondChoice.length === 1) {
      if (firstChoice[0].image === secondChoice[0].image) {
        setFoundedCards(firstChoice);
        setFirstChoice([]);
        setSecondChoice([]);
      }
      if (firstChoice[0].image !== secondChoice[0].image) {
        console.log("flip Back this cards");
      }
    }
  }, [firstChoice, secondChoice]);

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
