import { IButton } from "../../interfaces/interfaces";

function Buttons({
  arrayGame,
  setArrayGame,
  arrayUser,
  setArrayUser,
  setScore,
  instruction,
  setInstruction,
}: IButton) {
  function generatorNumber() {
    let arraySorteio = Array(10).keys();
  }

  return instruction === "Sua Vez" ? (
    <>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
    </>
  ) : (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>0</div>
    </>
  );
}

export default Buttons;
