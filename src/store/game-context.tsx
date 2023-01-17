import React, { createContext, useEffect, useState } from "react";

import { CardsIcons } from "../utilities/cards";

import useLocalStorage from "../hooks/useLocalStorage";

type Cards = {
  image: string;
  id: number;
  flipped: boolean;
  matched: boolean;
  selected: boolean;
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
  setOpenCardsTime: any;
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
  const [firstChoice, setFirstChoice] = useState<any>({});
  const [secondChoice, setSecondChoice] = useState<any>({});
  const [finishGame, setFinishGame] = useState(false);
  const { value } = useLocalStorage("open-time", 1);
  const [openCardsTime, setOpenCardsTime] = useState(JSON.parse(value));

  //Initial localStorage state
  useEffect(() => {
    const localData = localStorage.getItem("player");
    if (localData !== null) {
      setPlayer(JSON.parse(localData));
      setOpenCardsTime(1);
    }
  }, []);

  const flipOnStart = (open: boolean, cards: Cards[]) =>
    cards.map((singleCard) => {
      return {
        ...singleCard,
        flipped: open ? false : true,
      };
    });

  const flipBackCards = () => {
    const mixedCards = cards.sort(() => Math.random() - 0.5);

    setCards(flipOnStart(false, mixedCards));
    setTimeout(() => {
      setCards(flipOnStart(true, mixedCards));
    }, openCardsTime * 1000);
  };

  const changeCardSide = (id: number) => {
    const newArr = cards.map((card: Cards) => {
      if (card.id === id) {
        const newSide = {
          ...card,
          flipped: !card.flipped,
          selected: !card.selected,
        };
        setCardsHandler(card.id);
        return newSide;
      }
      return card;
    });
    setCards(newArr);
  };

  const setCardsHandler = (id: number) => {
    const selectedCard = cards.find((card) => card.id === id);
    Object.keys(firstChoice).length
      ? setSecondChoice(selectedCard)
      : setFirstChoice(selectedCard);
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
    if (Object.keys(firstChoice).length && Object.keys(secondChoice).length) {
      if (firstChoice.image === secondChoice.image) {
        matchedCardHandler();
        setFirstChoice({});
        setSecondChoice({});
      } else {
        const updatedCards = cards.map((card: any) =>
          [firstChoice.id, secondChoice.id].includes(card.id)
            ? { ...card, flipped: !card.flipped }
            : card
        );
        setTimeout(() => {
          setCards(updatedCards);

          //RESET CARDS
          setFirstChoice({});
          setSecondChoice({});
        }, 1000);
      }
    }
    finishGameHandler();
  }, [firstChoice, secondChoice, cards]);

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
