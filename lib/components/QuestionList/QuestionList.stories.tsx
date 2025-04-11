import { Question, QuestionDetailType } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import QuestionList from "./QuestionList";

// Sample questions data for stories
const sampleQuestions: QuestionDetailType[] = [
  {
    id: "1",
    title: "What is the capital of France?",
    options: [
      {
        id: "1",
        text: "Paris",
        correct: true,
        percentage: 75,
      },
      {
        id: "2",
        text: "London",
        correct: false,
        percentage: 10,
      },
      {
        id: "3",
        text: "Berlin",
        correct: false,
        percentage: 8,
      },
      {
        id: "4",
        text: "Madrid",
        correct: false,
        percentage: 7,
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
        percentage: 15,
      },
      {
        id: "2",
        text: "Mars",
        correct: true,
        percentage: 70,
      },
      {
        id: "3",
        text: "Venus",
        correct: false,
        percentage: 15,
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
        percentage: 20,
      },
      {
        id: "2",
        text: "Leonardo da Vinci",
        correct: true,
        percentage: 65,
      },
      {
        id: "3",
        text: "Pablo Picasso",
        correct: false,
        percentage: 15,
      },
    ],
  },
];

const meta: Meta<typeof QuestionList> = {
  title: "Components/QuestionList",
  component: QuestionList,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A list component that displays multiple questions with options and controls for editing and deleting.",
      },
    },
  },
  argTypes: {
    onEditQuestion: { action: "edit question" },
    onDeleteQuestion: { action: "delete question" },
  },
};

export default meta;

type Story = StoryObj<typeof QuestionList>;

// Default story with sample questions
const DefaultTemplate = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(sampleQuestions[0]);
  const [questions, setQuestions] = useState(sampleQuestions);

  const handleDelete = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
    setSelectedQuestion(sampleQuestions[0]);
  };

  const handleEdit = (question: Question) => {
    console.log({ question });
    setQuestions(questions.map((q) => (q.id === question.id ? question : q)));
  };

  return (
    <QuestionList
      questions={questions}
      onEditQuestion={handleEdit}
      onDeleteQuestion={handleDelete}
      selectedQuestion={selectedQuestion}
      onSelectQuestion={(id) => {
        setSelectedQuestion(questions.find((q) => q.id === id) || questions[0]);
      }}
      canModify
    />
  );
};

export const Default: Story = {
  render: () => <DefaultTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "Default view showing multiple questions with options and controls. Questions can be selected, edited and deleted with state management.",
      },
    },
  },
};
