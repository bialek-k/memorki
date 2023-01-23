/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { CardsIcons } from "../utilities/cards";
import useLocalStorage from "../hooks/useLocalStorage";
import { CardProps } from "../components/Card/Card";

import { gameContextInit, GameContextObj } from "./game-context-data";

export const GameContext = createContext<GameContextObj>(
  gameContextInit as GameContextObj
);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState(CardsIcons);
  const [player, setPlayer] = useState("");
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [firstChoice, setFirstChoice] = useState<CardProps | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardProps | null>(null);
  const { value } = useLocalStorage("open-time", 1);
  const [openCardsTime, setOpenCardsTime] = useState(JSON.parse(value));
  const [finalTime, setFinalTime] = useState(100);
  const [resetTimer, setResetTimer] = useState(false);
  const [finishGame, setFinishGame] = useState(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  //Initial localStorage state
  useEffect(() => {
    const localData = localStorage.getItem("player");
    if (localData !== null) {
      setPlayer(JSON.parse(localData));
      setOpenCardsTime(1);
    }
  }, []);

  const refreshHandler = () => {
    flipBackCards();
    setTimerIsRunning(false);
    setResetTimer(true);
  };

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
    Object.keys(firstChoice || {}).length
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

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setIsPending(false);
  };

  const cardCompareHandler = () => {
    if (secondChoice === null) return;

    setIsPending(true);

    if (firstChoice?.image === secondChoice?.image) {
      matchedCardHandler();
      resetChoices();
    } else {
      const reversCard = cards.map((card: CardProps) =>
        [firstChoice?.id, secondChoice?.id].includes(card.id)
          ? { ...card, flipped: !card.flipped }
          : card
      );

      setTimeout(() => {
        setCards(reversCard);
        resetChoices();
      }, 1000);
    }
  };

  useEffect(() => {
    cardCompareHandler();

    if (cards.every((card) => card.matched === true)) {
      finishGameHandler();
    }
  }, [firstChoice, secondChoice]);

  const finishGameHandler = () => {
    setFinishGame(true);
    setTimerIsRunning(false);
  };

  const contextValue: GameContextObj = {
    cards,
    flipBackCards,
    changeCardSideHandler,
    player,
    setPlayer,
    finishGame,
    setFinishGame,
    openCardsTime,
    setOpenCardsTime,
    isPending,
    setIsPending,
    timerIsRunning,
    setTimerIsRunning,
    finalTime,
    setFinalTime,
    resetTimer,
    setResetTimer,
    refreshHandler,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
