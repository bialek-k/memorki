import React from "react";
import ReactDOM from "react-dom";

import { ReactComponent as Close } from "../../../assets/close.svg";

import { GameContext } from "../../../store/game-context";

import styles from "./Settings.module.scss";

const Settings = ({ setShowSetting }: any) => {
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
          <form className={styles.form}>
            <label>
              Dźwięk: <input name="name" />
            </label>
            <label>
              Czas otwarcia: <input name="name" type="number" />
            </label>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Settings;
