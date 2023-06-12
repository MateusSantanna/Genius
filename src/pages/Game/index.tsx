import Buttons from "../../components/Buttons";
import Score from "../../components/Score";
import Instructions from "../../components/Instructions";
import { IGenius } from "../../interfaces/interfaces";
import { useState } from "react";

function Game({
  arrayGame,
  setArrayGame,
  arrayUser,
  setArrayUser,
  score,
  setScore,
  instruction,
  setInstruction,
}: IGenius) {
  const [begin, setBegin] = useState(false);

  // setTimeout(changeTimeGame, 1000)
  return (
    <>
      {begin === false ? (
        <>
          <h1>BEM VINDO AO GENIUS</h1>
          <button onClick={() => setBegin(true)}>Começar</button>
        </>
      ) : (
        <>
          <Score score={score} />
          <Instructions
            instruction={instruction}
            setInstruction={setInstruction}
            arrayGame={arrayGame}
            arrayUser={arrayUser}
            score={score}
          />

          <Buttons
            arrayGame={arrayGame}
            setArrayGame={setArrayGame}
            arrayUser={arrayUser}
            setArrayUser={setArrayUser}
            setScore={setScore}
            instruction={instruction}
            setInstruction={setInstruction}
          />
        </>
      )}
    </>
  );
}

export default Game;
