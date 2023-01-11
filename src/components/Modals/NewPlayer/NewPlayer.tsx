import React from "react";

import styles from "./NewPlayer.module.scss";

const NewPlayer = () => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Nowy gracz</h1>
        <div className={styles.form}>
          <label>
            Imię: <input name="name" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewPlayer;
