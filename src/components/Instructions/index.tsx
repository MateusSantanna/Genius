import { IInstruction } from "../../interfaces/interfaces";
import {
  ResultInstructions,
  CorrectAnswer,
  WrongAnswer,
  Container,
} from "./style";

function Instructions({ instruction }: IInstruction) {
  const receiveInstruction = (response: string) => {
    if (response === "Resposta Correta") {
      return <CorrectAnswer>🏆</CorrectAnswer>;
    }

    if (response === "Resposta Errada") {
      return <WrongAnswer>X</WrongAnswer>;
    }

    if (response === "Sua Vez") {
      return <ResultInstructions>Sua Vez</ResultInstructions>;
    }

    if (response === "Decore os números") {
      return <ResultInstructions>Decore os números</ResultInstructions>;
    }
  };
  return <Container>{receiveInstruction(instruction)}</Container>;
}

export default Instructions;
