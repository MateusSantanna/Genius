import { IGenius } from "../../interfaces/interfaces";
import { ResultInstructions } from "./style";

function Instructions({ instruction }: IGenius) {
  return (
    <div>
      <ResultInstructions>{instruction}</ResultInstructions>
    </div>
  );
}

export default Instructions;
