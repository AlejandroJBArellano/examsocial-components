import { Meta } from "@storybook/react";
import { useState } from "react";
import { AnswerOptionType, QuestionDetail } from "./index";

const meta: Meta = {
  title: "Components/QuestionDetail/Interactive",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Interactive examples of the QuestionDetail component demonstrating its use in a quiz-like application.",
      },
    },
  },
};

export default meta;

// Quiz with multiple questions
export const SimpleQuiz = () => {
  // Track which question is being viewed
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Track if results are showing
  const [showResults, setShowResults] = useState(false);
  // Track user selections for each question
  const [userSelections, setUserSelections] = useState<Record<string, string>>(
    {},
  );

  // Quiz questions data
  const questions = [
    {
      id: "q1",
      text: "Which language is used for styling web pages?",
      options: [
        { id: "q1-a", content: "HTML", isCorrect: false, percentage: 15 },
        { id: "q1-b", content: "CSS", isCorrect: true, percentage: 70 },
        { id: "q1-c", content: "JavaScript", isCorrect: false, percentage: 10 },
        { id: "q1-d", content: "Python", isCorrect: false, percentage: 5 },
      ],
    },
    {
      id: "q2",
      text: "Which React hook is used for side effects?",
      options: [
        { id: "q2-a", content: "useState", isCorrect: false, percentage: 20 },
        { id: "q2-b", content: "useReducer", isCorrect: false, percentage: 5 },
        { id: "q2-c", content: "useEffect", isCorrect: true, percentage: 65 },
        { id: "q2-d", content: "useContext", isCorrect: false, percentage: 10 },
      ],
    },
    {
      id: "q3",
      text: "Which pattern does this component implement?",
      options: [
        {
          id: "q3-a",
          content: "Render Props",
          isCorrect: false,
          percentage: 15,
        },
        {
          id: "q3-b",
          content: "HOC (Higher Order Component)",
          isCorrect: false,
          percentage: 10,
        },
        {
          id: "q3-c",
          content: "Compound Component",
          isCorrect: true,
          percentage: 60,
        },
        {
          id: "q3-d",
          content: "Provider Pattern",
          isCorrect: false,
          percentage: 15,
        },
      ],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleSelect = (questionId: string, optionId: string) => {
    setUserSelections({
      ...userSelections,
      [questionId]: optionId,
    });
  };

  // Move to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setUserSelections({});
  };

  // Calculate score
  const calculateScore = () => {
    let correct = 0;

    questions.forEach((question) => {
      const selectedOption = question.options.find(
        (option) => option.id === userSelections[question.id],
      );
      if (selectedOption?.isCorrect) {
        correct++;
      }
    });

    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    };
  };

  // Custom compound component implementation
  const QuizQuestion = ({ question }: { question: typeof currentQuestion }) => {
    const selectedOptionId = userSelections[question.id] || null;

    return (
      <QuestionDetail
        showCorrectAnswer={showResults}
        options={question.options as AnswerOptionType[]}
      >
        <QuestionDetail.Header>{question.text}</QuestionDetail.Header>
        <div className="mt-8">
          <div className="flex flex-col gap-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                className={`rounded-md border p-4 text-left transition-all ${
                  selectedOptionId === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-300"
                } ${
                  showResults && option.isCorrect
                    ? "border-green-500 bg-green-50"
                    : showResults &&
                        selectedOptionId === option.id &&
                        !option.isCorrect
                      ? "border-red-500 bg-red-50"
                      : ""
                }`}
                onClick={() => handleSelect(question.id, option.id)}
                disabled={showResults}
              >
                {option.content}
              </button>
            ))}
          </div>
        </div>
      </QuestionDetail>
    );
  };

  // Results screen
  const ResultsScreen = () => {
    const score = calculateScore();

    return (
      <div className="max-w-xl rounded-lg border border-gray-300 p-8 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Quiz Results</h2>
        <div className="mb-6 text-5xl font-bold text-blue-600">
          {score.percentage}%
        </div>
        <p className="mb-8 text-xl">
          You got {score.correct} out of {score.total} questions correct!
        </p>

        <button
          className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-2 text-3xl font-bold">
        Interactive QuestionDetail Demo
      </h1>
      <p className="mb-8 text-gray-600">
        A sample quiz using the compound component pattern
      </p>

      {!showResults ? (
        <>
          <div className="mb-8">
            <QuizQuestion question={currentQuestion} />
          </div>

          <div className="flex justify-between">
            <button
              className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            <div className="text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>

            <button
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleNext}
              disabled={!userSelections[currentQuestion.id]}
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </>
      ) : (
        <ResultsScreen />
      )}
    </div>
  );
};
