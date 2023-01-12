import React, { useContext, useRef } from "react";

import { GameContext } from "../../../store/game-context";

import styles from "./NewPlayer.module.scss";

interface NewPlayerInterface {
  setShowModal: (value: boolean) => void;
}

const NewPlayer = ({ setShowModal }: NewPlayerInterface) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setPlayer } = useContext(GameContext);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setPlayer(inputRef?.current?.value);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Nowy gracz</h1>
        <form className={styles.form} onSubmit={submitHandler}>
          <label>
            Imię: <input name="name" ref={inputRef} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default NewPlayer;
