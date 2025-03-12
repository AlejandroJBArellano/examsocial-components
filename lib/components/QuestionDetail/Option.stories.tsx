import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AnswerOptionType, QuestionDetail } from "./index";

// Create a custom option component for stories
const StoryOption: React.FC<{
  id: string;
  isCorrect: boolean;
  showCorrectAnswer: boolean;
  percentage: number;
  children: React.ReactNode;
}> = ({ id, isCorrect, percentage, children }) => {
  const options: AnswerOptionType[] = [
    {
      id,
      text: children,
      correct: isCorrect,
      percentage,
    },
  ];

  return (
    <div className="max-w-md rounded-md border border-dashed border-gray-300 p-4">
      <QuestionDetail options={options}>
        {/* The question text isn't shown in this story focus */}
        <span className="sr-only">Sample question</span>
      </QuestionDetail>
    </div>
  );
};

const meta: Meta<typeof StoryOption> = {
  title: "Components/QuestionDetail/Option",
  component: StoryOption,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "QuestionDetail Option component demonstrating different states of answer options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isCorrect: {
      control: "boolean",
      description: "Whether this option is the correct answer",
    },
    showCorrectAnswer: {
      control: "boolean",
      description: "Whether to show which answer is correct",
    },
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Percentage of users who chose this option",
    },
    children: {
      control: "text",
      description: "The content of the option",
    },
  },
};

export default meta;
type Story = StoryObj<typeof StoryOption>;

// Basic option
export const Default: Story = {
  args: {
    id: "option-1",
    isCorrect: false,
    showCorrectAnswer: false,
    percentage: 30,
    children: "This is a basic answer option",
  },
};

// Correct option (not showing answer)
export const CorrectOptionHidden: Story = {
  args: {
    id: "option-2",
    isCorrect: true,
    showCorrectAnswer: false,
    percentage: 45,
    children: "This is the correct answer (but not shown)",
  },
};

// Correct option (showing answer)
export const CorrectOptionShown: Story = {
  args: {
    id: "option-3",
    isCorrect: true,
    showCorrectAnswer: true,
    percentage: 45,
    children: "This is the correct answer (shown)",
  },
};

// Selected but incorrect
export const IncorrectOption: Story = {
  args: {
    id: "option-4",
    isCorrect: false,
    showCorrectAnswer: true,
    percentage: 30,
    children: "This is an incorrect option",
  },
};

// Selected correct option
export const CorrectOption: Story = {
  args: {
    id: "option-5",
    isCorrect: true,
    showCorrectAnswer: true,
    percentage: 45,
    children: "This is the correct option",
  },
};

// High percentage option
export const HighPercentageOption: Story = {
  args: {
    id: "option-7",
    isCorrect: true,
    showCorrectAnswer: true,
    percentage: 85,
    children: "Most students chose this (correct) answer",
  },
};

// Low percentage option
export const LowPercentageOption: Story = {
  args: {
    id: "option-8",
    isCorrect: false,
    showCorrectAnswer: true,
    percentage: 5,
    children: "Few students chose this (incorrect) answer",
  },
};

// Option with code content
export const CodeOption: Story = {
  args: {
    id: "option-9",
    isCorrect: true,
    showCorrectAnswer: true,
    percentage: 60,
    children: "const [state, setState] = useState(0);",
  },
};

// Option with rich content
export const RichContentOption: Story = {
  args: {
    id: "option-10",
    isCorrect: true,
    showCorrectAnswer: true,
    percentage: 70,
    children: (
      <div className="flex items-center gap-2">
        <span className="font-bold text-blue-500">React:</span>
        <code>const [state, setState] = useState(0);</code>
      </div>
    ),
  },
};
