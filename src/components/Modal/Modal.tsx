import { Backdrop } from "./Backdrop";
import { motion } from "framer-motion";

import styles from "./Modal.module.scss";

export const Modal = ({ handleClose, children }: any) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </motion.div>
    </Backdrop>
  );
};
