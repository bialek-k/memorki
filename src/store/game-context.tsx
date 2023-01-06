import { createContext } from "react";

import { DUMMY_CARDS } from "../utilities/cards";

type CardObj = {
  color: string;
  id: number;
  flipped: boolean;
};

type GameContextObj = {
  cards: CardObj[];
};

const GameContext = createContext<GameContextObj>({
  cards: DUMMY_CARDS,
});

export const GameContextProvider: React.FC = (props) => {
  return <GameContext.Provider value={"siema"}></GameContext.Provider>;
};
// import { useState, createContext } from "react";
// import { DUMMY_CARDS } from "../utilities/cards";

// interface GameContextInterface {
//   cards:any;
//   endGame: Boolean;
//   setEndGame: () => void;
//   player: String;
//   setPlayer: () => void;
// }

// const GameContext = createContext<GameContextInterface>({
//   cards: DUMMY_CARDS,
//   endGame: false,
//   setEndGame: () => {},
//   player: "igor",
//   setPlayer: () => {},
// });

// export const GameContextProvider: React.FC<{ children: React.ReactNode }> = (
//   props
// ) => {
//   const [endGame, setEndGame] = useState(false);
//   const [player, setPlayer] = useState("igor");

//   return (
//     <GameContext.Provider
//       value={{
//         cards:cards
//         endGame: endGame,
//         setEndGame
//         player: player,
//         setPlayer,
//       }}
//     >
//       {props.children}
//     </GameContext.Provider>
//   );
// };

// export default GameContext;
