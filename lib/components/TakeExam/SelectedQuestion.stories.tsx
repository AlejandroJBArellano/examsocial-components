import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectedQuestion from "./SelectedQuestion";

// Create fixed IDs for our sample questions to ensure consistent behavior
const questionIds = {
  q1: "q1-" + uuidv4().substring(0, 8),
  q2: "q2-" + uuidv4().substring(0, 8),
  q3: "q3-" + uuidv4().substring(0, 8),
  q4: "q4-" + uuidv4().substring(0, 8),
  q5: "q5-" + uuidv4().substring(0, 8),
};

// Create fixed IDs for options
const optionIds = {
  q1: {
    a: "q1-a-" + uuidv4().substring(0, 8),
    b: "q1-b-" + uuidv4().substring(0, 8),
    c: "q1-c-" + uuidv4().substring(0, 8),
    d: "q1-d-" + uuidv4().substring(0, 8),
  },
  q2: {
    a: "q2-a-" + uuidv4().substring(0, 8),
    b: "q2-b-" + uuidv4().substring(0, 8),
    c: "q2-c-" + uuidv4().substring(0, 8),
    d: "q2-d-" + uuidv4().substring(0, 8),
  },
  q3: {
    a: "q3-a-" + uuidv4().substring(0, 8),
    b: "q3-b-" + uuidv4().substring(0, 8),
    c: "q3-c-" + uuidv4().substring(0, 8),
    d: "q3-d-" + uuidv4().substring(0, 8),
  },
  q4: {
    a: "q4-a-" + uuidv4().substring(0, 8),
    b: "q4-b-" + uuidv4().substring(0, 8),
    c: "q4-c-" + uuidv4().substring(0, 8),
    d: "q4-d-" + uuidv4().substring(0, 8),
  },
  q5: {
    a: "q5-a-" + uuidv4().substring(0, 8),
    b: "q5-b-" + uuidv4().substring(0, 8),
    c: "q5-c-" + uuidv4().substring(0, 8),
    d: "q5-d-" + uuidv4().substring(0, 8),
  },
};

// Sample questions for our stories
const sampleQuestions = [
  {
    title: "What is the capital of France?",
    options: [
      { text: "Paris", correct: true, _id: optionIds.q1.a },
      { text: "London", correct: false, _id: optionIds.q1.b },
      { text: "Berlin", correct: false, _id: optionIds.q1.c },
      { text: "Madrid", correct: false, _id: optionIds.q1.d },
    ],
    _id: questionIds.q1,
  },
  {
    title: "What is the largest planet in our solar system?",
    options: [
      { text: "Jupiter", correct: true, _id: optionIds.q2.a },
      { text: "Saturn", correct: false, _id: optionIds.q2.b },
      { text: "Earth", correct: false, _id: optionIds.q2.c },
      { text: "Mars", correct: false, _id: optionIds.q2.d },
    ],
    _id: questionIds.q2,
  },
  {
    title: "What is the chemical symbol for water?",
    options: [
      { text: "H2O", correct: true, _id: optionIds.q3.a },
      { text: "O2", correct: false, _id: optionIds.q3.b },
      { text: "CO2", correct: false, _id: optionIds.q3.c },
      { text: "H2", correct: false, _id: optionIds.q3.d },
    ],
    _id: questionIds.q3,
  },
  {
    title: "Who wrote 'Romeo and Juliet'?",
    options: [
      { text: "William Shakespeare", correct: true, _id: optionIds.q4.a },
      { text: "Charles Dickens", correct: false, _id: optionIds.q4.b },
      { text: "Jane Austen", correct: false, _id: optionIds.q4.c },
      { text: "Mark Twain", correct: false, _id: optionIds.q4.d },
    ],
    _id: questionIds.q4,
  },
  {
    title: "What is the speed of light?",
    options: [
      {
        text: "299,792,458 meters per second",
        correct: true,
        _id: optionIds.q5.a,
      },
      {
        text: "150,000,000 meters per second",
        correct: false,
        _id: optionIds.q5.b,
      },
      {
        text: "300,000,000 meters per second",
        correct: false,
        _id: optionIds.q5.c,
      },
      {
        text: "299,792,000 meters per second",
        correct: false,
        _id: optionIds.q5.d,
      },
    ],
    _id: questionIds.q5,
  },
];

export default {
  title: "Components/TakeExam/SelectedQuestion",
  component: SelectedQuestion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SelectedQuestion component for navigating through questions in a quiz or exam. Allows users to select answers and move between questions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    questions: {
      description: "Array of questions to display",
      control: { type: "object" },
    },
    selected: {
      description: "Index of the currently selected question",
      control: { type: "number", min: 0, max: 4 },
    },
    setSelected: {
      description: "Function to update the selected question index",
      action: "setSelected",
    },
    onFinish: {
      description: "Function called when the user completes all questions",
      action: "onFinish",
    },
    onSelectOption: {
      description: "Function called when a user selects an answer option",
      action: "onSelectOption",
    },
    canJumpBetweenSteps: {
      description: "Whether the user can navigate backwards",
      control: "boolean",
    },
    recordQuestionSelectedOptions: {
      description: "Record of selected options for each question",
      control: { type: "object" },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "650px",
          height: "500px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof SelectedQuestion>;

type Story = StoryObj<typeof SelectedQuestion>;

// Default story
export const Default: Story = {
  args: {
    questions: sampleQuestions,
    selected: 0,
    setSelected: action("setSelected"),
    onFinish: action("onFinish"),
    onSelectOption: action("onSelectOption"),
    canJumpBetweenSteps: true,
    recordQuestionSelectedOptions: {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default state of the SelectedQuestion component showing the first question with no options selected yet.",
      },
    },
  },
};

// Story with an option already selected
export const WithSelectedOption: Story = {
  args: {
    questions: sampleQuestions,
    selected: 0,
    setSelected: action("setSelected"),
    onFinish: action("onFinish"),
    onSelectOption: action("onSelectOption"),
    canJumpBetweenSteps: true,
    recordQuestionSelectedOptions: {
      [questionIds.q1]: optionIds.q1.a,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "SelectedQuestion with an answer already selected, enabling the Next button.",
      },
    },
  },
};

// Story showing the last question
export const LastQuestion: Story = {
  args: {
    questions: sampleQuestions,
    selected: 4,
    setSelected: action("setSelected"),
    onFinish: action("onFinish"),
    onSelectOption: action("onSelectOption"),
    canJumpBetweenSteps: true,
    recordQuestionSelectedOptions: {
      [questionIds.q1]: optionIds.q1.a,
      [questionIds.q2]: optionIds.q2.a,
      [questionIds.q3]: optionIds.q3.a,
      [questionIds.q4]: optionIds.q4.a,
      [questionIds.q5]: optionIds.q5.a,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Showing the last question in the exam with the 'Finish' button enabled.",
      },
    },
  },
};

// Story with restricted navigation
export const RestrictedNavigation: Story = {
  args: {
    questions: sampleQuestions,
    selected: 2,
    setSelected: action("setSelected"),
    onFinish: action("onFinish"),
    onSelectOption: action("onSelectOption"),
    canJumpBetweenSteps: false,
    recordQuestionSelectedOptions: {
      [questionIds.q1]: optionIds.q1.a,
      [questionIds.q2]: optionIds.q2.a,
      [questionIds.q3]: optionIds.q3.a,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "SelectedQuestion with restricted navigation - users cannot go back to previous questions.",
      },
    },
  },
};

// Interactive story with state
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedIndex, setSelectedIndex] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOptions, setSelectedOptions] = useState<
      Record<string, string>
    >({});

    const handleSelectOption = (questionId: string, optionId: string) => {
      action("onSelectOption")(questionId, optionId);
      setSelectedOptions((prev) => ({
        ...prev,
        [questionId]: optionId,
      }));
    };

    const handleSetSelected = (updater: (prev: number) => number) => {
      const newIndex = updater(selectedIndex);
      action("setSelected")(newIndex);
      setSelectedIndex(newIndex);
    };

    return (
      <SelectedQuestion
        questions={sampleQuestions}
        selected={selectedIndex}
        setSelected={handleSetSelected}
        onFinish={() => action("onFinish")("Exam completed!")}
        onSelectOption={handleSelectOption}
        canJumpBetweenSteps={true}
        recordQuestionSelectedOptions={selectedOptions}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully interactive version of the SelectedQuestion component - select options and navigate between questions to see the component in action.",
      },
    },
  },
};
