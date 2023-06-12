import { ScoreActual, ScoreText } from "./style";
import { IScore } from "../../interfaces/interfaces";

function Score({ score }: IScore) {
  return (
    <>
      <ScoreText>Pontuação</ScoreText>
      <ScoreActual>{score}</ScoreActual>
    </>
  );
}

export default Score;
