import { useState } from "react";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Heading5, Smoll } from "../FontFaces";
import { Icon } from "../Icon";

interface IReviewQuestionSet {
  question: Yup.InferType<typeof questionSchema>;
  correct?: boolean;
}

const ReviewQuestionSet = ({ question }: IReviewQuestionSet) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="space-y-4 rounded-md border-sm border-black bg-gray-50 p-4 hover:shadow-right-sm hover:shadow-black">
      <div className="flex items-center gap-2 text-xl font-medium leading-6 tracking-[0.4px] text-feedback-success">
        <Icon name="check" className="!h-6 !w-6" />
        <Heading5>{question.question}</Heading5>
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
          <Smoll>Show all options</Smoll>
          {showOptions ? (
            <Icon name="keyboard_arrow_up" size={12} />
          ) : (
            <Icon name="keyboard_arrow_down" size={12} />
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
