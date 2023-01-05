import styles from "./CardBoard.module.css";

import Card from "../Card/Card";
import type { CardProps } from "../Card/Card";

type CardBoardProps = {
  cards: any;
};

const CardBoard = ({ cards }: CardBoardProps) => {
  return (
    <div className={styles.cardBoard}>
      {cards.map((card: CardProps) => {
        return <Card id={card.id} flipped={card.flipped} color={card.color} />;
      })}
    </div>
  );
};

export default CardBoard;
