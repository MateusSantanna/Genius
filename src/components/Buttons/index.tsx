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
  StyleEffect,
} from "./style";

const Buttons = ({
  arrayGame,
  arrayUser,
  setArrayUser,
  score,
  setScore,
  instruction,
  setInstruction,
  numberScreen,
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
        {numberScreen === 1 ? <StyleEffect>1</StyleEffect> : <button>1</button>}
        {numberScreen === 2 ? <StyleEffect>2</StyleEffect> : <button>2</button>}
        {numberScreen === 3 ? <StyleEffect>3</StyleEffect> : <button>3</button>}
      </OneToThree>

      <FourToSix>
        {numberScreen === 4 ? <StyleEffect>4</StyleEffect> : <button>4</button>}
        {numberScreen === 5 ? <StyleEffect>5</StyleEffect> : <button>5</button>}
        {numberScreen === 6 ? <StyleEffect>6</StyleEffect> : <button>6</button>}
      </FourToSix>

      <SevenToNine>
        {numberScreen === 7 ? <StyleEffect>7</StyleEffect> : <button>7</button>}
        {numberScreen === 8 ? <StyleEffect>8</StyleEffect> : <button>8</button>}
        {numberScreen === 9 ? <StyleEffect>9</StyleEffect> : <button>9</button>}
      </SevenToNine>

      <Zero>
        {numberScreen === 0 ? <StyleEffect>0</StyleEffect> : <button>0</button>}
      </Zero>
    </>
  );
};

export default Buttons;
