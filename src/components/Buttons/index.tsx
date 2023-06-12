import { IButton } from "../../interfaces/interfaces";
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

function Buttons({
  arrayGame,
  setArrayGame,
  arrayUser,
  setArrayUser,
  setScore,
  instruction,
  setInstruction,
}: IButton) {
  function showAllNumbers(number: number) {
    for (let i = 0; i <= arrayGame.length; i++) {
      if (arrayGame[i] === number) {
        return <h1>{number}</h1>;
      }
    }
  }

  return instruction === "Sua Vez" ? (
    <>
      <OneToThreeClick>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </OneToThreeClick>

      <FourToSixClick>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </FourToSixClick>

      <SevenToNineClick>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </SevenToNineClick>

      <ZeroClick>
        <button>0</button>
      </ZeroClick>
    </>
  ) : (
    <>
      <OneToThree>
        <button onClick={() => showAllNumbers(1)}>1</button>
        <button onClick={() => showAllNumbers(2)}>2</button>
        <button onClick={() => showAllNumbers(3)}>3</button>
      </OneToThree>

      <FourToSix>
        <button onClick={() => showAllNumbers(4)}>4</button>
        <button onClick={() => showAllNumbers(5)}>5</button>
        <button onClick={() => showAllNumbers(6)}>6</button>
      </FourToSix>

      <SevenToNine>
        <button onClick={() => showAllNumbers(7)}>7</button>
        <button onClick={() => showAllNumbers(8)}>8</button>
        <button onClick={() => showAllNumbers(9)}>9</button>
      </SevenToNine>

      <Zero>
        <button onClick={() => showAllNumbers(0)}>0</button>
      </Zero>
    </>
  );
}

export default Buttons;
