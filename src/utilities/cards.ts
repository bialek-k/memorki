import chase from "../assets/png/chase.png";
import marshall from "../assets/png/marshall.png";
import rocky from "../assets/png/rocky.png";
import rubble from "../assets/png/rubble.png";
import skye from "../assets/png/skye.png";
import zuma from "../assets/png/zuma.png";

export const CardsIcons = [
  { image: chase, id: 1, flipped: false, matched: false },
  { image: marshall, id: 2, flipped: false, matched: false },
  { image: rocky, id: 3, flipped: false, matched: false },
  { image: rubble, id: 4, flipped: false, matched: false },
  { image: skye, id: 5, flipped: false, matched: false },
  { image: zuma, id: 6, flipped: false, matched: false },
  { image: chase, id: 7, flipped: false, matched: false },
  { image: marshall, id: 8, flipped: false, matched: false },
  { image: rocky, id: 9, flipped: false, matched: false },
  { image: rubble, id: 10, flipped: false, matched: false },
  { image: skye, id: 11, flipped: false, matched: false },
  { image: zuma, id: 12, flipped: false, matched: false },
].sort(() => Math.random() - 0.5);
