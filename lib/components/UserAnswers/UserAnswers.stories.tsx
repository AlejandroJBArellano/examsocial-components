import type { Meta, StoryObj } from "@storybook/react";
import { ReviewQuestionSet } from "../ReviewQuestionSet";
import UserAnswers from "./UserAnswers";

const meta = {
  title: "Components/UserAnswers",
  component: UserAnswers,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The UserAnswers component displays a collection of answers from a specific user in a responsive grid layout. It uses semantic HTML (section, header, main) for improved accessibility and SEO. It includes a header with the user's name and a close button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    userName: {
      control: "text",
      description: "The name of the user whose answers are displayed",
    },
    onClose: {
      action: "closed",
      description: "Function triggered when the close button is clicked",
    },
    children: {
      control: { disable: true },
      description:
        "The content to display in the grid layout, typically ReviewQuestionSet components",
    },
  },
} satisfies Meta<typeof UserAnswers>;

export default meta;
type Story = StoryObj<typeof UserAnswers>;

// Mock question data
const mockQuestions = [
  {
    title: "What is the capital of France?",
    id: "q1",
    options: [
      { text: "Paris", correct: true, id: "o1" },
      { text: "London", correct: false, id: "o2" },
      { text: "Berlin", correct: false, id: "o3" },
      { text: "Madrid", correct: false, id: "o4" },
    ],
  },
  {
    title: "Which planet is known as the Red Planet?",
    id: "q2",
    options: [
      { text: "Mars", correct: true, id: "o5" },
      { text: "Venus", correct: false, id: "o6" },
      { text: "Jupiter", correct: false, id: "o7" },
      { text: "Saturn", correct: false, id: "o8" },
    ],
  },
];

/**
 * The default story shows the UserAnswers component with sample questions.
 * Note the semantic HTML structure: section > header + main
 */
export const Default: Story = {
  args: {
    userName: "Justin Anderson",
  },
  render: (args) => (
    <UserAnswers {...args}>
      {mockQuestions.map((question) => (
        <ReviewQuestionSet key={question.id} question={question} selected={0} />
      ))}
    </UserAnswers>
  ),
};

/**
 * Example with multiple questions in a responsive grid layout.
 * The main element creates a responsive grid for the children.
 */
export const WithMultipleQuestions: Story = {
  args: {
    userName: "Sarah Johnson",
  },
  render: (args) => (
    <UserAnswers {...args}>
      {[...mockQuestions, ...mockQuestions].map((question, index) => (
        <ReviewQuestionSet
          key={`${question.id}-${index}`}
          question={{
            ...question,
            id: `${question.id}-${index}`,
          }}
          selected={0}
        />
      ))}
    </UserAnswers>
  ),
};
