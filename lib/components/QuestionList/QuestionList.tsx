import { useState } from "react";
import { QuestionDetail } from "../QuestionDetail";
import { QuestionSet } from "../QuestionSet";

const questions = [
  {
    id: 1,
    question: "What is your name?",
  },
  {
    id: 2,
    question: "What is your age?",
  },
];

const QuestionList = () => {
  const [selected, setSelected] = useState(questions[0].id);
  return (
    <section className="grid grid-cols-12 p-8 gap-8">
      <article className="col-span-7 space-y-8">
        {questions.map((currentQuestion) => (
          <div
            key={currentQuestion.id}
            onClick={() => setSelected(currentQuestion.id)}
            className="cursor-pointer"
          >
            <QuestionSet
              question={currentQuestion.question}
              viewOnly
              selected={selected === currentQuestion.id}
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
