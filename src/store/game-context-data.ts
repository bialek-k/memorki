import { CardProps } from "../components/Card/Card";

export type GameContextObj = {
  cards: CardProps[];
  flipBackCards: () => void;
  changeCardSideHandler: (id: number) => void;
  player: string;
  setPlayer: (name: string) => void;
  points: number;
  setPoints: (points: number) => void;
  finishGame: boolean;
  setFinishGame: (finishGame: boolean) => void;
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

export const gameContextInit = {
  cards: [],
  flipBackCards: () => {},
  changeCardSideHandler: () => {},
  player: "",
  setPlayer: () => {},
  points: 0,
  setPoints: () => {},
  finishGame: false,
  setFinishGame: () => {},
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
};
