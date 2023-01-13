import React, { useEffect, useReducer, useContext } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Close } from "../../../assets/close.svg";
import styles from "./Settings.module.scss";

import { GameContext } from "../../../store/game-context";

interface SettingsProps {
  setShowSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings = ({ setShowSetting }: SettingsProps) => {
  const { setOpenCardsTime, openCardsTime } = useContext(GameContext);

  const initialState = { seconds: openCardsTime };
  const reducer = (secState: any, action: any) => {
    switch (action.type) {
      case "increment":
        return { seconds: secState.seconds + 1 };
      case "decrement":
        return { seconds: secState.seconds - 1 };
      default:
        throw new Error();
    }
  };

  const [secState, dispatch] = useReducer(reducer, initialState);

  console.log(openCardsTime);

  useEffect(() => {
    setOpenCardsTime(secState.seconds);
  }, [secState]);

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
          <div className={styles.form}>
            <label>
              Dźwięk:{" "}
              <input type="range" min="1" max="100" className={styles.slider} />
            </label>
            <label>
              Czas otwarcia:{" "}
              <div className={styles.timeControls}>
                <button
                  type="button"
                  onClick={() => {
                    if (secState.seconds < 1) return;
                    dispatch({ type: "decrement" });
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  className={styles.timeInput}
                  value={openCardsTime}
                />
                <button
                  type="button"
                  onClick={() => dispatch({ type: "increment" })}
                >
                  +
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Settings;
