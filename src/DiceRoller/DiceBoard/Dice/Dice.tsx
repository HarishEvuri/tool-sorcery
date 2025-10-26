import { useEffect, useRef } from "react";
import "./Dice.css";

type DiceProps = {
  value: number;
  turnCount: number;
};

export const Dice = ({ value, turnCount }: DiceProps) => {
  const diceRef = useRef<HTMLDivElement>(null);

  const rollDice = (val: number) => {
    const dice = diceRef.current;

    if (!dice) return;
    dice.style.animation = "rolling 1.5s linear";

    setTimeout(() => {
      const xMap: Record<number, number> = {
        1: 0,
        6: 180,
        2: -90,
        5: 90,
        3: 0,
        4: 0,
      };
      const yMap: Record<number, number> = {
        1: 0,
        6: 0,
        2: 0,
        5: 0,
        3: 90,
        4: -90,
      };

      const x = xMap[val] ?? 0;
      const y = yMap[val] ?? 0;
      dice.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
      dice.style.animation = "none";
    }, 1000);
  };

  useEffect(() => {
    if (value > 0 && turnCount > 0) {
      rollDice(value);
    }
  }, [value, turnCount]);

  return (
    <div className="dice" ref={diceRef}>
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
      <div className="face right"></div>
      <div className="face left"></div>
    </div>
  );
};
