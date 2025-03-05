export interface IQuestion {
  question: string;
  options: { text: string; correct?: boolean }[];
}
