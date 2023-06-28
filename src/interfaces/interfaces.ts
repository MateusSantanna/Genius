export interface IGenius {
  arrayGame: number[];
  setArrayGame: (value: number[]) => void;
  arrayUser: number[];
  setArrayUser: (value: number[]) => void | undefined;
  arrayScreen: number[];
  setArrayScreen: (value: number[]) => void | undefined;
  score: number;
  setScore: (value: number) => void;
  instruction: string;
  setInstruction: (value: string) => void;
  begin: boolean;
  setBegin: (value: boolean) => void;
  numberScreen: number;
  setNumberScreen: (value: number) => void;
}

export interface IInstruction {
  instruction: string;
}

export interface IScore {
  score: number;
}

export interface IButtons {
  arrayGame: number[];
  arrayUser: number[];
  setArrayUser: (value: number[]) => void | undefined;
  arrayScreen: number[];
  setArrayScreen: (value: number[]) => void | undefined;
  score: number;
  setScore: (value: number) => void;
  instruction: string;
  setInstruction: (value: string) => void;
  numberScreen: number;
  setNumberScreen: (value: number) => void;
}
