import React, { createContext, useEffect, useState } from "react";

import { CardsIcons } from "../utilities/cards";

type Cards = {
  image: string;
  id: number;
  flipped: boolean;
  matched: boolean;
};

type GameContextObj = {
  cards: Cards[];
  flipBackCards: () => void;
  changeCardSide: (id: number) => void;
  player: string;
  setPlayer: (name: string) => void;
  points: number;
  setPoints: (points: number) => void;
  finishGame: boolean;
  openCardsTime: number;
  setOpenCardsTime: (time: number) => void;
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  flipBackCards: () => {},
  changeCardSide: () => {},
  player: "",
  setPlayer: (name) => {},
  points: 0,
  setPoints: () => {},
  finishGame: false,
  openCardsTime: 1,
  setOpenCardsTime: () => {},
} as GameContextObj);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState(CardsIcons);
  const [player, setPlayer] = useState("");
  const [points, setPoints] = useState(0);
  const [firstChoice, setFirstChoice] = useState<Cards[]>([]);
  const [secondChoice, setSecondChoice] = useState<Cards[]>([]);
  const [foundedCards, setFoundedCards] = useState<Cards[]>([]);
  const [finishGame, setFinishGame] = useState(false);
  const [openCardsTime, setOpenCardsTime] = useState(1);

  useEffect(() => {
    const localData = localStorage.getItem("player");
    if (localData !== null) setPlayer(JSON.parse(localData));
  }, []);

  const flipBackCards = () => {
    setTimeout(() => {
      const flipped = cards.map((singleCard) => {
        return {
          ...singleCard,
          flipped: false,
        };
      });
      setCards(flipped);
    }, openCardsTime * 1000);
  };

  const changeCardSide = (id: number) => {
    const newArr = cards.map((card: Cards) => {
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

  const matchedCardHandler = () => {
    const matchedCards: Cards[] = cards.map((card) => {
      if (card.flipped === true) {
        return {
          ...card,
          matched: true,
        };
      }
      return card;
    });
    setCards(matchedCards);
  };

  const finishGameHandler = () => {
    const allMatchedCards = cards.filter((card) => card.matched === true);
    if (allMatchedCards.length === cards.length) {
      setFinishGame(true);
    }
  };

  useEffect(() => {
    if (firstChoice.length === 1 && secondChoice.length === 1) {
      if (firstChoice[0].image === secondChoice[0].image) {
        setFoundedCards(firstChoice);
        setFirstChoice([]);
        setSecondChoice([]);
        matchedCardHandler();
      }

      if (firstChoice[0].image !== secondChoice[0].image) {
        const cardsToFlipBack = [firstChoice[0].id, secondChoice[0].id];

        const updatedCards = cards.map((card: any) => {
          if (cardsToFlipBack.includes(card.id)) {
            return { ...card, flipped: !card.flipped };
          }
          return card;
        });

        setTimeout(() => {
          setCards(updatedCards);
          setFirstChoice([]);
          setSecondChoice([]);
        }, 1000);
      }
    }
    finishGameHandler();
  }, [firstChoice, secondChoice]);

  const contextValue: GameContextObj = {
    cards,
    flipBackCards,
    changeCardSide,
    player,
    setPlayer,
    points,
    setPoints,
    finishGame,
    openCardsTime,
    setOpenCardsTime,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
