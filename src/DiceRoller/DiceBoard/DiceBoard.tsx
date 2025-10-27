import { useState } from "react";
import { Dice } from "./Dice/Dice";
import "./DiceBoard.css";

export const DiceBoard = () => {
  const [diceCount, setDiceCount] = useState<number>(1);
  const [diceValues, setDiceValues] = useState<number[]>([0]);
  const [turnCount, setTurnCount] = useState<number>(0);

  const roll = () => {
    const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
    console.log("Rolled values:", newValues);
    setDiceValues(newValues);
    setTurnCount(turnCount + 1);
  };

  const increaseCount = () => {
    if (diceCount >= 8) return;
    setDiceValues(Array.from({ length: diceCount + 1 }, () => 0));
    setDiceCount(diceCount + 1);
  };

  const decreaseCount = () => {
    if (diceCount <= 1) return;
    setDiceValues(Array.from({ length: diceCount - 1 }, () => 0));
    setDiceCount(diceCount - 1);
  };

  return (
    <>
      <div className="diceBoard">
        <div className="diceContainer">
          {diceValues.map((value, index) => (
            <Dice
              key={index.toString() + "-" + turnCount.toString()}
              value={value}
              turnCount={turnCount}
            />
          ))}
        </div>

        <div className="diceActions">
          <div className="counterSection">
            <button className="counterBtn" onClick={increaseCount}>
              +
            </button>
            <button className="counterBtn" onClick={decreaseCount}>
              -
            </button>
          </div>
          <button className="rollBtn" onClick={roll}>
            Roll Dice
          </button>
        </div>
      </div>
    </>
  );
};
