import style from "./Backdrop.module.scss";
import { motion } from "framer-motion";

export const Backdrop = ({ children, onClick }: any) => {
  return (
    <motion.div
      className={style.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
