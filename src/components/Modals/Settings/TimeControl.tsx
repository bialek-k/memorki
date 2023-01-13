import React, { useContext, useEffect } from "react";
import styles from "./TimeControl.module.scss";
import useLocalStorage from "../../../hooks/useLocalStorage";

const TimeControl = () => {
  const [value, setValue] = useLocalStorage("open-time", JSON.stringify(1));

  return (
    <label>
      Czas otwarcia:{" "}
      <div className={styles.timeControls}>
        <button
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
        <input type="number" value={value} className={styles.timeInput} />
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

export default TimeControl;
