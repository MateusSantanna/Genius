import { useEffect } from "react";
import { IButtons } from "../../interfaces/interfaces";
import {
  OneToThree,
  FourToSix,
  SevenToNine,
  Zero,
  OneToThreeClick,
  FourToSixClick,
  SevenToNineClick,
  ZeroClick,
} from "./style";

const Buttons = ({
  arrayGame,
  arrayUser,
  setArrayUser,
  score,
  setScore,
  instruction,
  setInstruction,
  setGameOver,
}: IButtons) => {
  useEffect(() => {
    let isCorrect = true;
    for (let i = 0; i < arrayUser.length; i++) {
      if (arrayGame[i] !== arrayUser[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      if (arrayUser.length === arrayGame.length) {
        setInstruction("Resposta Correta");
        setArrayUser([]);
        setScore(score + 1);
      }
    } else {
      setInstruction("Resposta Errada");
      setGameOver(true);
    }
  }, [arrayUser]);

  const checkNumbers = (number: number) => {
    setArrayUser([...(arrayUser || []), number]);
  };

  return instruction === "Sua Vez" ? (
    <>
      <OneToThreeClick>
        <button onClick={() => checkNumbers(1)}>1</button>
        <button onClick={() => checkNumbers(2)}>2</button>
        <button onClick={() => checkNumbers(3)}>3</button>
      </OneToThreeClick>

      <FourToSixClick>
        <button onClick={() => checkNumbers(4)}>4</button>
        <button onClick={() => checkNumbers(5)}>5</button>
        <button onClick={() => checkNumbers(6)}>6</button>
      </FourToSixClick>

      <SevenToNineClick>
        <button onClick={() => checkNumbers(7)}>7</button>
        <button onClick={() => checkNumbers(8)}>8</button>
        <button onClick={() => checkNumbers(9)}>9</button>
      </SevenToNineClick>

      <ZeroClick>
        <button onClick={() => checkNumbers(0)}>0</button>
      </ZeroClick>
    </>
  ) : (
    <>
      <OneToThree>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </OneToThree>

      <FourToSix>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </FourToSix>

      <SevenToNine>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </SevenToNine>

      <Zero>
        <button>0</button>
      </Zero>
    </>
  );
};

export default Buttons;
