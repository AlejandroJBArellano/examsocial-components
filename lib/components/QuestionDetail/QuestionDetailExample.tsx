import React, { useState } from "react";
import { AnswerOptionType, QuestionDetail } from "./index";

const QuestionDetailExample: React.FC = () => {
  // Example question with answer options
  const [options] = useState<AnswerOptionType[]>([
    {
      id: "1",
      content:
        'import {"{writable}"} from \'svelte/store\'; {"\n"} const store = writable([]);',
      correct: true,
      percentage: 42,
    },
    {
      id: "2",
      content:
        "import { useState } from 'react'; {\"\n\"} const [state, setState] = useState([]);",
      correct: false,
      percentage: 30,
    },
    {
      id: "3",
      content:
        "import { reactive } from 'vue'; {\"\n\"} const state = reactive([]);",
      correct: false,
      percentage: 28,
    },
  ]);

  const handleEdit = () => {
    console.log("Edit question clicked");
  };

  const handleDelete = () => {
    console.log("Delete question clicked");
  };

  const [showAnswer, setShowAnswer] = useState(false);

  // Example using the compound component pattern directly
  return (
    <div className="p-4">
      <h2 className="mb-8 text-2xl">Question Detail Component Example</h2>

      <div className="mb-4 flex gap-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide" : "Show"} Correct Answer
        </button>
      </div>

      {/* Example 1: Using the component with props */}
      <div className="mb-12">
        <h3 className="mb-4 text-xl">Example 1: Component with props</h3>
        <QuestionDetail
          options={options}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showCorrectAnswer={showAnswer}
          correctPercentage={42}
        >
          Which code snippet creates a store in Svelte?
        </QuestionDetail>
      </div>

      {/* Example 2: Using the compound component pattern */}
      <div>
        <h3 className="mb-4 text-xl">
          Example 2: Using compound component pattern
        </h3>
        <QuestionDetail showCorrectAnswer={showAnswer}>
          <QuestionDetail.Header onEdit={handleEdit} onDelete={handleDelete}>
            Which code snippet creates a store in Svelte?
          </QuestionDetail.Header>
          <QuestionDetail.Options>
            {options.map((option) => (
              <QuestionDetail.Option key={option.id} id={option.id} />
            ))}
          </QuestionDetail.Options>
        </QuestionDetail>
      </div>
    </div>
  );
};

export default QuestionDetailExample;
