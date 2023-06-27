export interface IGenius {
  arrayGame?: number[];
  setArrayGame?: (value: number[]) => void;
  arrayUser?: number[];
  setArrayUser?: (value: number[]) => void | undefined;
  arrayScreen?: number[];
  setArrayScreen?: (value: number[]) => void | undefined;
  score?: number;
  setScore?: (value: number) => void;
  instruction?: string;
  setInstruction?: (value: string) => void;
  begin?: boolean;
  setBegin?: (value: boolean) => void;
  numberScreen?: number;
  setNumberScreen?: (value: number) => void;
}
