/* eslint-disable no-mixed-operators */
import { useState, createContext } from "react";

interface GameContextInterface {
  endGame: Boolean;
  setEndGame: () => void;
  player: String;
  setPlayer: () => void;
}

const GameContext = createContext<GameContextInterface>({
  endGame: false,
  setEndGame: () => {},
  player: "igor",
  setPlayer: () => {},
});

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [endGame, setEndGame] = useState(false);
  const [player, setPlayer] = useState("igor");

  return (
    <GameContext.Provider
      value={{
        endGame: endGame,
        setEndGame
        player: player,
        setPlayer,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContext;
