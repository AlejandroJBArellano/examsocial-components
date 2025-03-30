import { createContext, useContext } from "react";
import { ExamCreationContextType } from "../types";

export const ExamCreationContext = createContext<
  ExamCreationContextType | undefined
>(undefined);

export const useExamCreation = () => {
  const context = useContext(ExamCreationContext);
  if (context === undefined) {
    throw new Error(
      "useExamCreation must be used within a ExamCreationProvider",
    );
  }
  return context;
};
