import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import QuestionDetail from "./QuestionDetail";

export default {
  title: "Components/QuestionDetail",
  component: QuestionDetail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "QuestionDetail component displays a question with answer options and additional controls for editing and deleting.",
      },
    },
  },
  argTypes: {
    questionText: {
      control: "text",
      description: "The text of the question to display",
    },
    showCorrectAnswer: {
      control: "boolean",
      description: "Whether to display the correct answer indicator",
    },
    correctPercentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Percentage of users who answered correctly",
    },
    onEdit: {
      action: "edited",
      description: "Callback when edit button is clicked",
    },
    onDelete: {
      action: "deleted",
      description: "Callback when delete button is clicked",
    },
  },
  args: {
    onEdit: action("edit clicked"),
    onDelete: action("delete clicked"),
  },
} as Meta<typeof QuestionDetail>;

type Story = StoryObj<typeof QuestionDetail>;

/**
 * Default story showing the QuestionDetail component with default props
 */
export const Default: Story = {
  args: {
    children:
      "Which of the following is a correct way to create a writable store in Svelte?",
  },
};

/**
 * Shows the QuestionDetail with a custom question text
 */
export const CustomQuestion: Story = {
  args: {
    children: "What is the capital of France?",
  },
};

/**
 * Shows the QuestionDetail with a high success rate
 */
export const HighSuccessRate: Story = {
  args: {
    correctPercentage: 95,
    children: "What is the capital of France?",
  },
};

/**
 * Shows the QuestionDetail with a low success rate
 */
export const LowSuccessRate: Story = {
  args: {
    correctPercentage: 5,
    children: "What is the capital of France?",
  },
};

/**
 * Shows the QuestionDetail without the percentage indicator
 */
export const WithoutPercentage: Story = {
  args: {
    showCorrectAnswer: false,
    children: "What is the capital of France?",
  },
};
