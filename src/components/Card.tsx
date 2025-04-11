// import { numberToWords } from "../utils/numbersToWords";

import "./Card.css";

type Suit = "spades" | "hearts" | "diamonds" | "clubs";
type Rank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

interface CardProps {
  rank: Rank;
  suit: Suit;
}

const suits = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
};

const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function getCardValue(rank: Rank): number {
  if (["J", "Q", "K"].includes(rank)) return 0;
  return ranks.indexOf(rank) + 1;
}

export default function Card({ rank, suit }: CardProps) {
  const suitSymbol = suits[suit];
  
  return (
    <div className={`card ${suit}`}>
      <div className="top-marker">
        <div className="card-rank">{rank}</div>
        <div className="card-suit">{suitSymbol}</div>
      </div>
      <div className="card-center four">
        {Array.from({ length: getCardValue(rank) }).map((_, index) => (
          <div key={index} className={`card-suit ${suit}`}>
            {suitSymbol}
          </div>
        ))}
      </div>
      <div className="bottom-marker">
        <div className="card-rank">{rank}</div>
        <div className="card-suit">{suitSymbol}</div>
      </div>
    </div>
  );
}
