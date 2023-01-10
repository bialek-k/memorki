import React from "react";
import ReactDOM from "react-dom";

import styles from "./NewPlayer.module.scss";

const NewPlayer = ({ setShowModal }: any) => {
  return ReactDOM.createPortal(
    <div onClick={() => setShowModal(false)} className={styles.backdrop}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <h1>New Player </h1>
        <p>modal content</p>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default NewPlayer;
