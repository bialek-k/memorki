import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../../../assets/close.svg";
import styles from "./Settings.module.scss";

import TimeControl from "./TimeControl";

import { GameContext } from "../../../store/game-context";

interface SettingsProps {
  setShowSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({ setShowSetting }: SettingsProps) => {
  const { flipBackCards } = useContext(GameContext);

  const saveSettingsHandler = () => {
    flipBackCards();
    setShowSetting(false);
  };

  return ReactDOM.createPortal(
    <div onClick={() => setShowSetting(false)} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
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
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Settings;
