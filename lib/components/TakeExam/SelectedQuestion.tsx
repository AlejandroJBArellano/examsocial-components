import { ArrowForward, SportsScore } from "@mui/icons-material";
import { useState } from "react";
import { IQuestion } from "../../types";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { FocusSpan, Heading3, Heading6 } from "../FontFaces";

interface ISelectedQuestion {
  questions: IQuestion[];
  onFinish: () => void;
}

const SelectedQuestion = ({ questions, onFinish }: ISelectedQuestion) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const question = questions[currentQuestion];
  return (
    <section className="h-full space-y-4 px-4 py-6">
      <article className="flex flex-col gap-5">
        <div className="space-y-1">
          <Heading6>Question {currentQuestion + 1}</Heading6>
          <Heading3>{question.question}</Heading3>
        </div>
        <div className="flex flex-auto flex-col gap-2">
          {question.options.map((option) => (
            <AnswerOption
              onClick={() => {
                setSelectedOptions((prev) => [...prev, option._id!]);
              }}
              key={option._id}
              checked={selectedOptions.includes(option._id!)}
              type={
                selectedOptions.includes(option._id!) ? "selectable" : undefined
              }
            >
              {option.text}
            </AnswerOption>
          ))}
        </div>
      </article>
      <article className="flex justify-between">
        <Button
          theme="light"
          rounded
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
          disabled={currentQuestion === 0}
        >
          <FocusSpan>Previous</FocusSpan>
        </Button>
        <Button
          rounded
          theme="accent"
          className="flex items-center justify-center gap-2"
          disabled={selectedOptions.length === 0}
          onClick={() => {
            if (currentQuestion === questions.length - 1) {
              onFinish();
              return;
            }
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          {currentQuestion === questions.length - 1 ? (
            <SportsScore />
          ) : (
            <ArrowForward />
          )}
          <FocusSpan>
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </FocusSpan>
        </Button>
      </article>
    </section>
  );
};

export default SelectedQuestion;
