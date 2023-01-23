import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { motion } from "framer-motion";

import { ReactComponent as Close } from "../../../assets/close.svg";
import { GameContext } from "../../../store/game-context";

import styles from "./NewPlayer.module.scss";

interface NewPlayerProps {
  showModalHandler: () => void;
  showNewPlayer: boolean;
}

export const NewPlayer = ({ showModalHandler }: NewPlayerProps) => {
  const { setPlayer, player } = useContext(GameContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("player", JSON.stringify(player));
    showModalHandler();
  };

  return ReactDOM.createPortal(
    <div onClick={() => showModalHandler()} className={styles.backdrop}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.wrapper}
      >
        <div className={styles.content}>
          <Close
            onClick={() => showModalHandler()}
            className={styles.closeBtn}
            fill="white"
            stroke="white"
            strokeWidth="10"
          />
          <h1>Nowy gracz</h1>
          <form className={styles.form} onSubmit={submitHandler}>
            <label>
              Imię:{" "}
              <input name="name" onChange={(e) => setPlayer(e.target.value)} />
            </label>
          </form>
        </div>
      </motion.div>
    </div>,
    document.getElementById("portal")!
  );
};
