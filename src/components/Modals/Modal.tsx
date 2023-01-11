import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

const Modal = ({ setShowModal, children }: any) => {
  return ReactDOM.createPortal(
    <div onClick={() => setShowModal(false)} className={styles.backdrop}>
      {children}
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
