import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../../../assets/close.svg";
import styles from "./Settings.module.scss";

import { motion } from "framer-motion";
import { TimeControl } from "./TimeControl";
import { GameContext } from "../../../store/game-context";

interface SettingsProps {
  setShowSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Settings = ({ setShowSetting }: SettingsProps) => {
  const { flipBackCards } = useContext(GameContext);

  const saveSettingsHandler = () => {
    flipBackCards();
    setShowSetting(false);
  };

  return ReactDOM.createPortal(
    <div onClick={() => setShowSetting(false)} className={styles.backdrop}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.wrapper}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ y: "100vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className={styles.content}>
          <Close
            onClick={() => setShowSetting(false)}
            className={styles.closeBtn}
            fill="white"
            stroke="white"
            strokeWidth="10"
          />
          <h1>Ustawienia</h1>
          <div className={styles.controls}>
            <TimeControl />
            <div className={styles.action}>
              <button onClick={saveSettingsHandler}>Zapisz</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("portal")!
  );
};
