/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { CardsIcons } from "../utilities/cards";
import useLocalStorage from "../hooks/useLocalStorage";
import { CardProps } from "../components/Card/Card";

type GameContextObj = {
  cards: CardProps[];
  flipBackCards: () => void;
  changeCardSideHandler: (id: number) => void;
  player: string;
  setPlayer: (name: string) => void;
  points: number;
  setPoints: (points: number) => void;
  finishGame: boolean;
  openCardsTime: number;
  setOpenCardsTime: any;
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  timerIsRunning: boolean;
  setTimerIsRunning: (timerIsRunning: boolean) => void;
  time: number;
  setTime: (time: number) => void;
  resetTimer: boolean;
  setResetTimer: (resetTimer: boolean) => void;
};

export const GameContext = createContext<GameContextObj>({
  cards: [],
  flipBackCards: () => {},
  changeCardSideHandler: () => {},
  player: "",
  setPlayer: () => {},
  points: 0,
  setPoints: () => {},
  finishGame: false,
  openCardsTime: 1,
  setOpenCardsTime: () => {},
  isPending: false,
  setIsPending: () => {},
  timerIsRunning: false,
  setTimerIsRunning: () => {},
  time: 0,
  setTime: () => {},
  resetTimer: false,
  setResetTimer: () => {},
} as GameContextObj);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState(CardsIcons);
  const [player, setPlayer] = useState("");
  const [points, setPoints] = useState(0);
  const [firstChoice, setFirstChoice] = useState<CardProps>({} as CardProps);
  const [secondChoice, setSecondChoice] = useState<CardProps>({} as CardProps);
  const [finishGame, setFinishGame] = useState(false);
  const { value } = useLocalStorage("open-time", 1);
  const [openCardsTime, setOpenCardsTime] = useState(JSON.parse(value));
  const [isPending, setIsPending] = useState<boolean>(false);
  const [time, setTime] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  //Initial localStorage state
  useEffect(() => {
    const localData = localStorage.getItem("player");
    if (localData !== null) {
      setPlayer(JSON.parse(localData));
      setOpenCardsTime(1);
    }
  }, []);

  const flipOnStart = (open: boolean, cards: CardProps[]) => {
    const changed = cards.map((singleCard) => {
      return {
        ...singleCard,
        flipped: open ? false : true,
      };
    });
    return changed;
  };

  const flipBackCards = () => {
    const mixedCards = cards
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, flipped: false, matched: false };
      });

    setCards(flipOnStart(false, mixedCards));
    setTimeout(() => {
      setCards(flipOnStart(true, mixedCards));
    }, openCardsTime * 1000);
  };

  const changeCardSideHandler = (id: number) => {
    setTimerIsRunning(true);
    setCardsHandler(id);
    const changeCardSide = cards.map((card) =>
      card.id === id ? { ...card, flipped: !card.flipped } : card
    );
    setCards(changeCardSide);
  };

  const setCardsHandler = (id: number) => {
    const selectedCard = cards.find((card) => card.id === id);
    Object.keys(firstChoice).length
      ? setSecondChoice(selectedCard!)
      : setFirstChoice(selectedCard!);
  };

  const matchedCardHandler = () => {
    const matchedCards: CardProps[] = cards.map((card) => {
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
      setTimerIsRunning(true);
    }
  };

  useEffect(() => {
    if (Object.keys(firstChoice).length && Object.keys(secondChoice).length) {
      setIsPending(true);
      if (firstChoice.image === secondChoice.image) {
        matchedCardHandler();
        setFirstChoice({} as CardProps);
        setSecondChoice({} as CardProps);
        setIsPending(false);
      } else {
        const updatedCards = cards.map((card: any) =>
          [firstChoice.id, secondChoice.id].includes(card.id)
            ? { ...card, flipped: !card.flipped }
            : card
        );
        setTimeout(() => {
          setCards(updatedCards);

          //RESET CARDS
          setFirstChoice({} as CardProps);
          setSecondChoice({} as CardProps);
          setIsPending(false);
        }, 1000);
      }
    }
    finishGameHandler();
  }, [firstChoice, secondChoice, cards, finishGameHandler, matchedCardHandler]);

  const contextValue: GameContextObj = {
    cards,
    flipBackCards,
    changeCardSideHandler,
    player,
    setPlayer,
    points,
    setPoints,
    finishGame,
    openCardsTime,
    setOpenCardsTime,
    isPending,
    setIsPending,
    timerIsRunning,
    setTimerIsRunning,
    time,
    setTime,
    resetTimer,
    setResetTimer,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
