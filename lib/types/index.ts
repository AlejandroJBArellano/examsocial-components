export interface IQuestion {
  question: string;
  answers: { text: string; correct?: boolean }[];
}
