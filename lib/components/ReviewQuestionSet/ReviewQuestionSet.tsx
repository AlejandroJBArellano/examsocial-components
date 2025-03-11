import { cn } from "@/utils";
import { useState } from "react";
import * as Yup from "yup";
import { questionSchema } from "../../schemas";
import { Heading5, Smoll } from "../FontFaces";
import { Icon } from "../Icon";

interface IReviewQuestionSet {
  question: Yup.InferType<typeof questionSchema>;
  selected: number;
  correct?: boolean;
}

const ReviewQuestionSet = ({
  question,
  correct,
  selected,
}: IReviewQuestionSet) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="space-y-4 rounded-md border-sm border-black bg-gray-50 p-4 hover:shadow-right-sm hover:shadow-black xl:space-y-5 xl:p-5">
      <div
        className={cn(
          "flex items-center gap-2",
          correct ? "text-feedback-success" : "text-feedback-error",
        )}
      >
        <Icon name={correct ? "check" : "close"} size={24} />
        <Heading5>{question.title}</Heading5>
      </div>
      <div className="space-y-2">
        <div>
          <p className="leading-5 underline">
            {question.options[selected].text}
          </p>
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
