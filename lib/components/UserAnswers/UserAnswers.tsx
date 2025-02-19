import { Close } from "@mui/icons-material";
import { Button } from "../Button";
import { ReviewQuestionSet } from "../ReviewQuestionSet";

const UserAnswers = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-[28px] sentient font-medium tracking-[0.56px] leading-8">
          Justin Anderson’s Answers
        </h3>
        <Button theme="light" className="p-2" rounded>
          <Close className="!w-6 !h-6" />
        </Button>
      </div>
      <div className="grid xl:grid-cols-2 gap-x-6 gap-y-4">
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            answers: [
              { text: "Paris", correct: true },
              { text: "London", correct: false },
              { text: "Berlin", correct: false },
              { text: "Madrid", correct: false },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            answers: [
              { text: "Paris", correct: true },
              { text: "London", correct: false },
              { text: "Berlin", correct: false },
              { text: "Madrid", correct: false },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            answers: [
              { text: "Paris", correct: true },
              { text: "London", correct: false },
              { text: "Berlin", correct: false },
              { text: "Madrid", correct: false },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            answers: [
              { text: "Paris", correct: true },
              { text: "London", correct: false },
              { text: "Berlin", correct: false },
              { text: "Madrid", correct: false },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            answers: [
              { text: "Paris", correct: true },
              { text: "London", correct: false },
              { text: "Berlin", correct: false },
              { text: "Madrid", correct: false },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default UserAnswers;
