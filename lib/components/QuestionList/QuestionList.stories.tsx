import { Question } from "@/types";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import QuestionList from "./QuestionList";

// Sample questions data for stories
const sampleQuestions: Question[] = [
  {
    id: "1",
    title: "What is the capital of France?",
    options: [
      {
        id: "1",
        text: "Paris",
        correct: true,
      },
      {
        id: "2",
        text: "London",
        correct: false,
      },
      {
        id: "3",
        text: "Berlin",
        correct: false,
      },
      {
        id: "4",
        text: "Madrid",
        correct: false,
      },
    ],
  },
  {
    id: "2",
    title: "Which planet is known as the Red Planet?",
    options: [
      {
        id: "1",
        text: "Earth",
        correct: false,
      },
      {
        id: "2",
        text: "Mars",
        correct: true,
      },
      {
        id: "3",
        text: "Venus",
        correct: false,
      },
    ],
  },
  {
    id: "3",
    title: "Who painted the Mona Lisa?",
    options: [
      {
        id: "1",
        text: "Vincent van Gogh",
        correct: false,
      },
      {
        id: "2",
        text: "Leonardo da Vinci",
        correct: true,
      },
      {
        id: "3",
        text: "Pablo Picasso",
        correct: false,
      },
    ],
  },
];

export default {
  title: "Components/QuestionList",
  component: QuestionList,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onEditQuestion: { action: "edit question" },
    onDeleteQuestion: { action: "delete question" },
  },
} as Meta<typeof QuestionList>;

type Story = StoryObj<typeof QuestionList>;

// Default story with sample questions
export const Default: Story = {
  args: {
    questions: sampleQuestions,
    onEditQuestion: action("onEditQuestion"),
    onDeleteQuestion: action("onDeleteQuestion"),
  },
};

// Loading state
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    questions: [],
    emptyStateMessage: "No questions have been added yet",
  },
};

// Single question
export const SingleQuestion: Story = {
  args: {
    questions: [sampleQuestions[0]],
    onEditQuestion: action("onEditQuestion"),
    onDeleteQuestion: action("onDeleteQuestion"),
  },
};
