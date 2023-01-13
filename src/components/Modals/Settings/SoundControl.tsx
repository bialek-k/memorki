import React from "react";

import styles from "./SoundControl.module.scss";

const SoundControl = () => {
  return (
    <label>
      Dźwięk: <input type="range" min="1" max="100" className={styles.slider} />
    </label>
  );
};

export default SoundControl;
