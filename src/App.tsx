import { useState } from "react";
import Game from "./pages/Game";

function App() {
  const [arrayGame, setArrayGame] = useState([]);
  const [arrayUser, setArrayUser] = useState([]);
  const [score, setScore] = useState(0);
  const [instruction, setInstruction] = useState("Decore os Números");

  return (
    <Game
      arrayGame={arrayGame}
      setArrayGame={setArrayGame}
      arrayUser={arrayUser}
      setArrayUser={setArrayUser}
      score={score}
      setScore={setScore}
      instruction={instruction}
      setInstruction={setInstruction}
    />
  );
}

export default App;
