import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import Result, { Feedback } from "./Result";

// Sample feedback messages for different score conditions
const sampleFeedback: Feedback[] = [
  {
    message: "Perfect score! You're a genius!",
    condition: "EQUAL_TO",
    equal: 100,
  },
  {
    message: "Excellent job! You have a strong understanding of the material.",
    condition: "BETWEEN",
    min: 90,
    max: 99,
  },
  {
    message: "Great work! You've demonstrated good knowledge.",
    condition: "BETWEEN",
    min: 80,
    max: 89,
  },
  {
    message: "Good job! You've passed with a solid score.",
    condition: "BETWEEN",
    min: 70,
    max: 79,
  },
  {
    message: "You've passed, but there's room for improvement.",
    condition: "BETWEEN",
    min: 60,
    max: 69,
  },
  {
    message: "You were close! A bit more study and you'll pass next time.",
    condition: "BETWEEN",
    min: 50,
    max: 59,
  },
  {
    message: "You need to study more to pass this exam.",
    condition: "LESS_THAN",
    lt: 50,
  },
];

export default {
  title: "Components/TakeExam/Result",
  component: Result,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Component to display exam results, including score percentage, correct answers, and feedback based on performance.",
      },
    },
  },
  argTypes: {
    correctAnswers: {
      control: { type: "number", min: 0, max: 20 },
      description: "Number of questions answered correctly",
    },
    totalQuestions: {
      control: { type: "number", min: 1, max: 20 },
      description: "Total number of questions in the exam",
    },
    attemptsLeft: {
      control: { type: "number", min: 0, max: 5 },
      description: "Number of attempts remaining",
    },
    maxAttempts: {
      control: { type: "number", min: 1, max: 5 },
      description: "Maximum number of attempts allowed",
    },
    passingPercentage: {
      control: { type: "number", min: 0, max: 100 },
      description: "Minimum percentage required to pass",
    },
    showRetryButton: {
      control: "boolean",
      description: "Whether to show the retry button",
    },
    onRetry: {
      action: "retried",
      description: "Function called when retry button is clicked",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "600px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} as Meta<typeof Result>;

type Story = StoryObj<typeof Result>;

// Default story - passed exam
export const Passed: Story = {
  args: {
    correctAnswers: 15,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    passingPercentage: 60,
    showRetryButton: true,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Default view of a passed exam with 75% score.",
      },
    },
  },
};

// Failed exam
export const Failed: Story = {
  args: {
    correctAnswers: 11,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    passingPercentage: 60,
    showRetryButton: true,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Failed exam with 55% score (below passing threshold).",
      },
    },
  },
};

// Perfect score with custom feedback
export const PerfectScore: Story = {
  args: {
    correctAnswers: 20,
    totalQuestions: 20,
    attemptsLeft: 3,
    maxAttempts: 3,
    feedback: sampleFeedback,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Perfect score (100%) with custom congratulatory message.",
      },
    },
  },
};

// Nearly perfect with custom feedback
export const ExcellentScore: Story = {
  args: {
    correctAnswers: 18,
    totalQuestions: 20,
    attemptsLeft: 3,
    maxAttempts: 3,
    feedback: sampleFeedback,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Excellent score (90%) with appropriate feedback message.",
      },
    },
  },
};

// Low score with custom feedback
export const LowScore: Story = {
  args: {
    correctAnswers: 8,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    feedback: sampleFeedback,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Low score (40%) with encouraging feedback message.",
      },
    },
  },
};

// No more attempts
export const NoAttemptsLeft: Story = {
  args: {
    correctAnswers: 10,
    totalQuestions: 20,
    attemptsLeft: 0,
    maxAttempts: 3,
    feedback: sampleFeedback,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "No attempts remaining, retry button is hidden.",
      },
    },
  },
};
