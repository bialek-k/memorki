import React from "react";
import styles from "./TimeControl.module.scss";
import useLocalStorage from "../../../hooks/useLocalStorage";

const TimeControl = () => {
  const { value, setValue } = useLocalStorage("open-time");

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

export default TimeControl;
