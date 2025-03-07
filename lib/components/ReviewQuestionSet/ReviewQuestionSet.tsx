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
    <div className="space-y-4 rounded-md border-sm border-black bg-gray-50 p-4 hover:shadow-right-sm hover:shadow-black">
      <div className="flex items-center gap-2 text-xl font-medium leading-6 tracking-[0.4px] text-feedback-success">
        <Check className="!h-6 !w-6" />
        <p className="sentient">{question.question}</p>
      </div>
      <div className="space-y-2">
        <div>
          <p className="leading-5 underline">{question.options[0].text}</p>
        </div>
        <button
          className="flex w-full items-center justify-end gap-1"
          onClick={() => {
            setShowOptions((prev) => !prev);
          }}
        >
          <span className="text-xs">Show all options</span>
          {showOptions ? (
            <KeyboardArrowUp className="!h-3 !w-3" />
          ) : (
            <KeyboardArrowDown className="!h-3 !w-3" />
          )}
        </button>
        {showOptions && (
          <div className="space-y-2">
            {question.options.slice(1).map((option, index) => (
              <div key={index}>
                <p className="leading-5">{option.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewQuestionSet;
