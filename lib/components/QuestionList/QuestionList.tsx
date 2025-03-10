import { Question } from "@/types";
import { useState } from "react";
import { QuestionDetail } from "../QuestionDetail";
import { QuestionSet } from "../QuestionSet";

const questions: Question[] = [
  {
    _id: "1",
    title: "What is your name?",
    options: [
      {
        _id: "1",
        text: "John",
        correct: true,
      },
      {
        _id: "2",
        text: "Jane",
        correct: false,
      },
    ],
  },
  {
    _id: "2",
    title: "What is your age?",
    options: [
      {
        _id: "1",
        text: "20",
        correct: true,
      },
      {
        _id: "2",
        text: "25",
        correct: false,
      },
    ],
  },
];

const QuestionList = () => {
  const [selected, setSelected] = useState(questions[0]._id);
  return (
    <section className="grid grid-cols-12 gap-8 p-8">
      <article className="col-span-7 space-y-8">
        {questions.map((currentQuestion) => (
          <div
            key={currentQuestion._id}
            onClick={() => setSelected(currentQuestion._id)}
            className="cursor-pointer"
          >
            <QuestionSet
              title={currentQuestion.title}
              viewOnly
              selected={selected === currentQuestion._id}
            />
          </div>
        ))}
      </article>
      <article className="col-span-5">
        <QuestionDetail />
      </article>
    </section>
  );
};

export default QuestionList;
