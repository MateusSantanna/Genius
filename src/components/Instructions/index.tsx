import { IInstruction } from "../../interfaces/interfaces";
import { ResultInstructions } from "./style";

function Instructions({ instruction }: IInstruction) {
  return (
    <div>
      <ResultInstructions>{instruction}</ResultInstructions>
    </div>
  );
}

export default Instructions;
