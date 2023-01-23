import React, { useContext } from "react";
import styles from "./Card.module.scss";

import { motion } from "framer-motion";

import logo from "../../assets/png/logo.png";

import { GameContext } from "../../store/game-context";

export type CardProps = {
  id: number;
  flipped: boolean;
  image: string;
  matched: boolean;
};

export const Card = ({ id, flipped, image, matched }: CardProps) => {
  const { changeCardSideHandler, isPending } = useContext(GameContext);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      className={styles.card}
      style={matched ? { backgroundColor: "green" } : { backgroundColor: "" }}
      key={id}
      onClick={changeCardSideHandler.bind(null, id, image)}
      disabled={isPending}
    >
      <div className={styles.image}>
        <motion.img
          animate={{ rotateY: flipped ? 180 : 0 }}
          src={flipped ? image : logo}
          alt="dog"
        />
      </div>
    </motion.button>
  );
};
