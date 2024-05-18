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
    } else if (number > 0 && number < 10) {
      return "Está quase lá 😊";
    } else if (number >= 10 && number < 20) {
      return "Você é bom 💪";
    } else if (number >= 20) {
      return "Que memória espetacular 🧠🏆";
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
