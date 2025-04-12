import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import Result from "./Result";

// Sample feedback messages for different score conditions
const sampleMessages = [
  "Perfect score! You're a genius!",
  "Excellent job! You have a strong understanding of the material.",
  "Great work! You've demonstrated good knowledge.",
  "Good job! You've passed with a solid score.",
  "You've passed, but there's room for improvement.",
  "You were close! A bit more study and you'll pass next time.",
  "You need to study more to pass this exam.",
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
    minimum: {
      control: { type: "number", min: 0, max: 100 },
      description: "Minimum percentage required to pass",
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
    minimum: 60,
    score: 75,
    messages: sampleMessages,
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
    minimum: 60,
    score: 55,
    messages: sampleMessages,
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
    minimum: 60,
    messages: sampleMessages,
    score: 100,
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
    minimum: 60,
    messages: sampleMessages,
    score: 90,
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
    minimum: 60,
    messages: sampleMessages,
    score: 40,
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
    minimum: 60,
    messages: sampleMessages,
    score: 50,
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

// Unlimited attempts
export const UnlimitedAttempts: Story = {
  args: {
    correctAnswers: 12,
    totalQuestions: 20,
    attemptsLeft: 5,
    maxAttempts: -1,
    minimum: 60,
    messages: sampleMessages,
    score: 60,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Exam with unlimited attempts (maxAttempts = -1).",
      },
    },
  },
};

// Single attempt
export const SingleAttempt: Story = {
  args: {
    correctAnswers: 16,
    totalQuestions: 20,
    attemptsLeft: 1,
    maxAttempts: 1,
    minimum: 60,
    messages: sampleMessages,
    score: 80,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Exam with only one attempt allowed.",
      },
    },
  },
};

// No feedback messages
export const NoFeedback: Story = {
  args: {
    correctAnswers: 14,
    totalQuestions: 20,
    attemptsLeft: 2,
    maxAttempts: 3,
    minimum: 60,
    score: 70,
    onRetry: action("retry-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Result display without feedback messages.",
      },
    },
  },
};
