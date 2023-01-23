import { useContext } from "react";
import styles from "./CardBoard.module.scss";
import { Card } from "../Card/Card";

import { GameContext } from "../../store/game-context";

export const CardBoard = () => {
  const { cards } = useContext(GameContext);
  return (
    <div className={styles.cardBoard}>
      {cards.map(({ id, flipped, image, matched }) => {
        return (
          <Card
            key={id}
            id={id}
            flipped={flipped}
            image={image}
            matched={matched}
          />
        );
      })}
    </div>
  );
};
