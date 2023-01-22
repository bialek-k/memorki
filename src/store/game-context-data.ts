import { CardProps } from "../components/Card/Card";

export type GameContextObj = {
  cards: CardProps[];
  flipBackCards: () => void;
  changeCardSideHandler: (id: number) => void;
  player: string;
  setPlayer: (name: string) => void;
  finishGame: boolean;
  setFinishGame: (finishGame: boolean) => void;
  openCardsTime: number;
  setOpenCardsTime: any;
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  timerIsRunning: boolean;
  setTimerIsRunning: (timerIsRunning: boolean) => void;
  finalTime: number;
  setFinalTime: (finalTime: number) => void;
  resetTimer: boolean;
  setResetTimer: (resetTimer: boolean) => void;
  refreshHandler: () => void;
};

export const gameContextInit = {
  cards: [],
  flipBackCards: () => {},
  changeCardSideHandler: () => {},
  player: "",
  setPlayer: () => {},
  finishGame: false,
  setFinishGame: () => {},
  openCardsTime: 1,
  setOpenCardsTime: () => {},
  isPending: false,
  setIsPending: () => {},
  timerIsRunning: false,
  setTimerIsRunning: () => {},
  finalTime: 0,
  setFinalTime: () => {},
  resetTimer: false,
  setResetTimer: () => {},
  refreshHandler: () => {},
};
