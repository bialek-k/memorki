import React, { useContext, useEffect } from "react";
import styles from "./TimeControl.module.scss";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { GameContext } from "../../../store/game-context";

export const TimeControl = () => {
  const { setOpenCardsTime } = useContext(GameContext);
  const { value, setValue } = useLocalStorage("open-time");

  useEffect(() => {
    setOpenCardsTime(JSON.parse(value));
  }, [value]);

  return (
    <label>
      Czas otwarcia:{" "}
      <div className={styles.timeControls}>
        <button
          disabled={JSON.parse(value) < 1}
          type="button"
          onClick={() =>
            setValue(() => {
              if (JSON.parse(value) < 1) return;
              return JSON.stringify(JSON.parse(value) - 1);
            })
          }
        >
          -
        </button>
        <p className={styles.timeValue}>{value}</p>
        <button
          type="button"
          onClick={() => setValue(JSON.stringify(JSON.parse(value) + 1))}
        >
          +
        </button>
      </div>
    </label>
  );
};
