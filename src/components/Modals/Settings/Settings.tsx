import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../../../assets/close.svg";
import styles from "./Settings.module.scss";

import TimeControl from "./TimeControl";
import SoundControl from "./SoundControl";

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
          <div className={styles.controls}>
            <SoundControl />
            <TimeControl />
            <div className={styles.action}>
              <button>Zapisz</button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Settings;
