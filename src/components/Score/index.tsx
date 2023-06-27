import { CentralDiv, ScoreActual, ScoreText } from "./style";
import { IScore } from "../../interfaces/interfaces";

function Score({ score }: IScore) {
  return (
    <>
      <CentralDiv>
        <ScoreText>Pontuação:</ScoreText>
        <ScoreActual>{score}</ScoreActual>
      </CentralDiv>
    </>
  );
}

export default Score;
