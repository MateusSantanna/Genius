import Buttons from "../../components/Buttons";
import Score from "../../components/Score";
import Instructions from "../../components/Instructions";
import { useEffect, useState } from "react";
import { BeginGame, CorrectAnswer, NumberScreen } from "./style";
import classnames from "classnames";

const Game = () => {
  const [begin, setBegin] = useState<boolean>(false);
  const [arrayGame, setArrayGame] = useState<number[]>([]);
  const [arrayScreen, setArrayScreen] = useState<number[]>(arrayGame);
  const [numberScreen, setNumberScreen] = useState<number>(arrayScreen[0]);
  const [arrayUser, setArrayUser] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [instruction, setInstruction] = useState<string>("Decore os Números");
  const [numberScreenColor, setNumberScreenColor] = useState<string>("");

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
      setTimeout(countNumbers, 500);
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

  const generateRandomColor = () => {
    const colors = ["white"];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
  };

  useEffect(() => {
    if (arrayScreen.length > 0) {
      setNumberScreen(arrayScreen[0]);
      setNumberScreenColor(generateRandomColor());
    }
  }, [arrayScreen]);

  return (
    <>
      {!begin ? (
        <>
          <BeginGame>
            <h1>BEM VINDO AO GENIUS</h1>
            <button onClick={generateNumber}>Começar</button>
          </BeginGame>
        </>
      ) : (
        <>
          <Score score={score} />
          <Instructions instruction={instruction} />

          {instruction === "Sua Vez" ||
          instruction === "Resposta Errada" ||
          instruction === "Resposta Correta" ? (
            <h1></h1>
          ) : (
            <NumberScreen
              className={classnames("number-screen", numberScreenColor)}
            >
              {numberScreen}
            </NumberScreen>
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
            arrayUser={arrayUser}
            setArrayUser={setArrayUser}
            score={score}
            setScore={setScore}
            instruction={instruction}
            setInstruction={setInstruction}
            arrayScreen={arrayScreen}
            setArrayScreen={setArrayScreen}
            numberScreen={numberScreen}
            setNumberScreen={setNumberScreen}
          />
        </>
      )}
    </>
  );
};

export default Game;
