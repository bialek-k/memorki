import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../../../assets/close.svg";
import styles from "./Settings.module.scss";

interface SettingsProps {
  setShowSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({ setShowSetting }: SettingsProps) => {
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
              Dźwięk:{" "}
              <input type="range" min="1" max="100" className={styles.slider} />
            </label>
            <label>
              Czas otwarcia:{" "}
              <div className={styles.timeControls}>
                <button>-</button>
                <input type="number" className={styles.timeInput} />
                <button>+</button>
              </div>
            </label>
          </form>
          <button type="submit">Zapisz</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Settings;
