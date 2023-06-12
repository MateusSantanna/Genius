export interface IGenius {
  arrayGame: Array<number>;
  setArrayGame: Array<number>;
  arrayUser: Array<number>;
  setArrayUser: Array<number>;
  score: number;
  setScore: number;
  instruction: string;
  setInstruction: string;
  begin: boolean;
  setBegin: boolean;
}

export interface IScore {
  score: number;
}

export interface IButton {
  arrayGame: Array<number>;
  setArrayGame: Array<number>;
  arrayUser: Array<number>;
  setArrayUser: Array<number>;
  setScore: number;
  instruction: string;
  setInstruction: string;
}
