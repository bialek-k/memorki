import React, { createContext, useEffect, useState } from "react";

import { CardsIcons } from "../utilities/cards";

import useLocalStorage from "../hooks/useLocalStorage";
import { CardProps } from "../components/Card/Card";

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
  const [firstChoice, setFirstChoice] = useState<Cards[]>([]);
  const [secondChoice, setSecondChoice] = useState<Cards[]>([]);
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

  const flipOnStart = (open: boolean, cards: CardProps[]) =>
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
    const newCard = cards.filter((card) => card.id === id);
    firstChoice.length ? setSecondChoice(newCard) : setFirstChoice(newCard);
  };

  const preventThirdClick = () => {};

  useEffect(() => {
    if (secondChoice.length) preventThirdClick();
  }, [secondChoice]);

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
        setFirstChoice([]);
        setSecondChoice([]);
        matchedCardHandler();
      }

      if (firstChoice[0].image !== secondChoice[0].image) {
        const cardsToFlipBack = [firstChoice[0].id, secondChoice[0].id];

        const updatedCards = cards.map((card: any) => {
          if (cardsToFlipBack.includes(card.id)) {
            return {
              ...card,
              flipped: !card.flipped,
            };
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
