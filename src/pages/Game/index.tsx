import Buttons from "../../components/Buttons";
import Score from "../../components/Score";
import Instructions from "../../components/Instructions";
import { useEffect, useState } from "react";
import { CorrectAnswer, NumberScreen } from "./style";

const Game = () => {
  const [begin, setBegin] = useState<boolean>(false);
  const [arrayGame, setArrayGame] = useState<number[]>([]);
  const [arrayScreen, setArrayScreen] = useState<number[]>(arrayGame);
  const [numberScreen, setNumberScreen] = useState<number | undefined>(
    arrayScreen[0]
  );
  const [arrayUser, setArrayUser] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [instruction, setInstruction] = useState<string>("Decore os Números");

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setArrayGame((prevArray) => [...prevArray, randomNumber]);
    setArrayScreen([...arrayGame, randomNumber]);
    setBegin(true);
    setInstruction("Decore os Números");
  };

  const countNumbers = () => {
    if (arrayScreen.length > 0) {
      const updatedArrayScreen = arrayScreen.slice(1);
      setArrayScreen(updatedArrayScreen);
      setNumberScreen(updatedArrayScreen[0]);
    }

    if (arrayScreen.length === 1) {
      setInstruction("Sua Vez");
    }
  };

  useEffect(() => {
    if (begin && arrayScreen.length > 0) {
      setTimeout(countNumbers, 1000);
    }
  }, [begin, arrayScreen]);

  function endGame() {
    setBegin(false);
    setArrayGame([]);
    setArrayScreen(arrayGame);
    setArrayUser([]);
    setScore(0);
    setInstruction("Decore os Números");
  }

  useEffect(() => {
    if (arrayScreen.length > 0) {
      setNumberScreen(arrayScreen[0]);
    }
  }, [arrayScreen]);

  return (
    <>
      {!begin ? (
        <>
          <h1>BEM VINDO AO GENIUS</h1>
          <button onClick={generateNumber}>Começar</button>
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

          {instruction === "Sua Vez" ||
          instruction === "Resposta Errada" ||
          instruction === "Resposta Correta" ? (
            <h1></h1>
          ) : (
            <NumberScreen>{numberScreen}</NumberScreen>
          )}

          {instruction === "Resposta Correta" ? (
            <>
              <CorrectAnswer>
                <button onClick={generateNumber}>Continuar</button>
              </CorrectAnswer>
            </>
          ) : null}

          {instruction === "Resposta Errada" ? (
            <>
              <CorrectAnswer>
                <button onClick={() => endGame()}>Voltar ao Menu</button>
              </CorrectAnswer>
            </>
          ) : null}

          <Buttons
            arrayGame={arrayGame}
            setArrayGame={setArrayGame}
            arrayUser={arrayUser}
            setArrayUser={setArrayUser}
            score={score}
            setScore={setScore}
            instruction={instruction}
            setInstruction={setInstruction}
          />
        </>
      )}
    </>
  );
};

export default Game;
