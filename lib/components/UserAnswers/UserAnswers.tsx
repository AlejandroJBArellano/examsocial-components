import { Button } from "../Button";
import { Heading4 } from "../FontFaces";
import { Icon } from "../Icon";
import { ReviewQuestionSet } from "../ReviewQuestionSet";

const UserAnswers = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Heading4>Justin Anderson's Answers</Heading4>
        <Button theme="light" className="p-2" rounded>
          <Icon name="close" className="!h-6 !w-6" />
        </Button>
      </div>
      <div className="grid gap-x-6 gap-y-4 xl:grid-cols-2">
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            _id: "q1",
            options: [
              { text: "Paris", correct: true, _id: "o1" },
              { text: "London", correct: false, _id: "o2" },
              { text: "Berlin", correct: false, _id: "o3" },
              { text: "Madrid", correct: false, _id: "o4" },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            _id: "q2",
            options: [
              { text: "Paris", correct: true, _id: "o5" },
              { text: "London", correct: false, _id: "o6" },
              { text: "Berlin", correct: false, _id: "o7" },
              { text: "Madrid", correct: false, _id: "o8" },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            _id: "q3",
            options: [
              { text: "Paris", correct: true, _id: "o9" },
              { text: "London", correct: false, _id: "o10" },
              { text: "Berlin", correct: false, _id: "o11" },
              { text: "Madrid", correct: false, _id: "o12" },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            _id: "q4",
            options: [
              { text: "Paris", correct: true, _id: "o13" },
              { text: "London", correct: false, _id: "o14" },
              { text: "Berlin", correct: false, _id: "o15" },
              { text: "Madrid", correct: false, _id: "o16" },
            ],
          }}
        />
        <ReviewQuestionSet
          question={{
            question: "What is the capital of France?",
            _id: "q5",
            options: [
              { text: "Paris", correct: true, _id: "o17" },
              { text: "London", correct: false, _id: "o18" },
              { text: "Berlin", correct: false, _id: "o19" },
              { text: "Madrid", correct: false, _id: "o20" },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default UserAnswers;
