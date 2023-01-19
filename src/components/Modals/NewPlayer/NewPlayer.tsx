import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom";

import { ReactComponent as Close } from "../../../assets/close.svg";
import { GameContext } from "../../../store/game-context";

import styles from "./NewPlayer.module.scss";

interface NewPlayerProps {
  setShowNewPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  showNewPlayer: boolean;
}

const NewPlayer = ({ setShowNewPlayer, showNewPlayer }: NewPlayerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setPlayer } = useContext(GameContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef.current !== null) {
      const playerName = inputRef.current.value;
      setPlayer(playerName);
      localStorage.setItem("player", JSON.stringify(playerName));
    }
    setShowNewPlayer(false);
  };
  const closeModalHandler = () => showNewPlayer && setShowNewPlayer(false);

  return ReactDOM.createPortal(
    <div onClick={closeModalHandler} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
        <div className={styles.content}>
          <Close
            onClick={() => setShowNewPlayer(false)}
            className={styles.closeBtn}
            fill="white"
            stroke="white"
            strokeWidth="10"
          />
          <h1>Nowy gracz</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <label>
              Imię: <input name="name" ref={inputRef} />
            </label>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default NewPlayer;
