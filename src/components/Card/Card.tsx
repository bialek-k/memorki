import React from "react";
import styles from "./Card.module.css";

export type CardProps = {
  id?: string;
  flipped?: boolean;
  color?: string;
  handleClick?: () => void;
};

const Card = ({ id, flipped, color, handleClick }: CardProps) => {
  return (
    <div
      className={styles.card}
      key={id}
      style={flipped ? { backgroundColor: color } : { backgroundColor: "#333" }}
      onClick={() => handleClick}
    ></div>
  );
};

export default Card;
