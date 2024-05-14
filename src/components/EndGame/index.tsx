import { GameOverConteiner, GameOverProps, EndGameAdvise } from "./style";
import { WrongAnswer } from "../Instructions/style";
import { IGameOver } from "@/interfaces/interfaces";

function EndGame({
  score,
  setBegin,
  arrayGame,
  setArrayGame,
  setArrayScreen,
  setArrayUser,
  setScore,
  setGameOver,
}: IGameOver) {
  function results(number: number) {
    if (number === 0) {
      return "Não desanime😥";
    }

    if (number >= 1 || number <= 5) {
      return "Está quase lá 😊";
    }

    if (number >= 6 || number <= 10) {
      return "Você é bom 💪";
    }

    if (number >= 11 || number <= 20) {
      return "Que memória espetacular 🧠";
    }

    if (number > 20) {
      return "SIIIIIIIIIIU 🏆";
    }
  }
  function playAgain() {
    setBegin(false);
    setArrayGame([]);
    setArrayScreen(arrayGame);
    setArrayUser([]);
    setScore(0);
    setGameOver(false);
  }
  return (
    <GameOverConteiner>
      <GameOverProps>
        <EndGameAdvise>
          <WrongAnswer>X</WrongAnswer>
          <h1>Fim de Jogo</h1>
        </EndGameAdvise>
        <h1>{results(score)}</h1>

        <h1>Pontuação Final: {score} </h1>
        <button onClick={() => playAgain()}>Voltar ao Menu</button>
      </GameOverProps>
    </GameOverConteiner>
  );
}

export default EndGame;
