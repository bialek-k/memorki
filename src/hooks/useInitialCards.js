import { useState, useEffect } from "react";

import { DUMMY_CARDS } from "../utilities/cards";

const useInitialCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffleCards = DUMMY_CARDS.sort(() => Math.random() - 0.5);
    const flipOnStart = shuffleCards.map((singleCard) => {
      return {
        ...singleCard,
        flipped: !singleCard.flipped,
      };
    });

    setCards(flipOnStart);
    setTimeout(() => {
      setCards(shuffleCards);
    }, 2000);
  }, []);

  return [cards, setCards];
};

export default useInitialCards;
