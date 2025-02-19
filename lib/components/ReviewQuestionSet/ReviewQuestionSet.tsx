import { Check, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";

interface IReviewQuestionSet {
  question: Yup.InferType<typeof questionSchema>;
  correct?: boolean;
}

const ReviewQuestionSet = ({ question }: IReviewQuestionSet) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="border-sm border-black rounded-md space-y-4 p-4 hover:shadow-right-sm hover:shadow-black">
      <div className="text-feedback-success font-medium text-xl leading-6 tracking-[0.4px] flex items-center gap-2">
        <Check className="!w-6 !h-6" />
        <p className="sentient">{question.question}</p>
      </div>
      <div className="space-y-2">
        <div>
          <p className="leading-5 underline">{question.answers[0].text}</p>
        </div>
        <button
          className="flex w-full justify-end items-center gap-1"
          onClick={() => {
            setShowOptions((prev) => !prev);
          }}
        >
          <span className="text-xs">Show all options</span>
          {showOptions ? (
            <KeyboardArrowUp className="!w-3 !h-3" />
          ) : (
            <KeyboardArrowDown className="!w-3 !h-3" />
          )}
        </button>
        {showOptions && (
          <div className="space-y-2">
            {question.answers.slice(1).map((answer, index) => (
              <div key={index}>
                <p className="leading-5">{answer.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewQuestionSet;
