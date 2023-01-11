import chase from "../assets/png/chase.png";
import marshall from "../assets/png/marshall.png";
import rocky from "../assets/png/rocky.png";
import rubble from "../assets/png/rubble.png";
import skye from "../assets/png/skye.png";
import zuma from "../assets/png/zuma.png";

export const CardsIcons = [
  { image: chase, id: 1, flipped: true, matched: false },
  { image: marshall, id: 2, flipped: true, matched: false },
  { image: rocky, id: 3, flipped: true, matched: false },
  { image: rubble, id: 4, flipped: true, matched: false },
  { image: skye, id: 5, flipped: true, matched: false },
  { image: zuma, id: 6, flipped: true, matched: false },
  { image: chase, id: 7, flipped: true, matched: false },
  { image: marshall, id: 8, flipped: true, matched: false },
  { image: rocky, id: 9, flipped: true, matched: false },
  { image: rubble, id: 10, flipped: true, matched: false },
  { image: skye, id: 11, flipped: true, matched: false },
  { image: zuma, id: 12, flipped: true, matched: false },
].sort(() => Math.random() - 0.5);
