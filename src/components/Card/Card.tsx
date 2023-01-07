import React from "react";
import styles from "./Card.module.css";

export type CardProps = {
  id: number;
  flipped: boolean;
  color: string;
  onClickHandler: (id: number, flipped: boolean) => void;
};

const Card = ({ id, flipped, color, onClickHandler }: CardProps) => {
  return (
    <div
      className={styles.card}
      key={id}
      style={flipped ? { backgroundColor: color } : { backgroundColor: "#333" }}
      onClick={onClickHandler.bind(null, id, flipped)}
    >
      {id}
    </div>
  );
};

export default Card;
