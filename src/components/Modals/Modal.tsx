import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

export type ModalType = {
  setShowModal: (value: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ setShowModal, children }: ModalType) => {
  return ReactDOM.createPortal(
    <div onClick={() => setShowModal(false)} className={styles.backdrop}>
      {children}
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
