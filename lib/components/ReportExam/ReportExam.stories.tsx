import { Question } from "@/types";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import ReportExam from "./ReportExam";

// Sample questions for our stories
const sampleQuestions: Question[] = [
  {
    id: "q1",
    title: "What is the capital city of France?",
    options: [
      { text: "London", id: "q1-a", correct: false },
      { text: "Paris", id: "q1-b", correct: true },
      { text: "Berlin", id: "q1-c", correct: false },
      { text: "Madrid", id: "q1-d", correct: false },
    ],
  },
  {
    id: "q2",
    title: "Who painted the Mona Lisa?",
    options: [
      { text: "Vincent van Gogh", id: "q2-a", correct: false },
      { text: "Pablo Picasso", id: "q2-b", correct: false },
      { text: "Leonardo da Vinci", id: "q2-c", correct: true },
      { text: "Michelangelo", id: "q2-d", correct: false },
    ],
  },
  {
    id: "q3",
    title: "What is the chemical symbol for gold?",
    options: [
      { text: "Go", id: "q3-a", correct: false },
      { text: "Gd", id: "q3-b", correct: false },
      { text: "Au", id: "q3-c", correct: true },
      { text: "Ag", id: "q3-d", correct: false },
    ],
  },
  {
    id: "q4",
    title: "In which year did World War II end?",
    options: [
      { text: "1943", id: "q4-a", correct: false },
      { text: "1945", id: "q4-b", correct: true },
      { text: "1947", id: "q4-c", correct: false },
      { text: "1950", id: "q4-d", correct: false },
    ],
  },
  {
    id: "q5",
    title: "What is the largest planet in our solar system?",
    options: [
      { text: "Earth", id: "q5-a", correct: false },
      { text: "Saturn", id: "q5-b", correct: false },
      { text: "Jupiter", id: "q5-c", correct: true },
      { text: "Mars", id: "q5-d", correct: false },
    ],
  },
];

export default {
  title: "Components/ReportExam",
  component: ReportExam,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A component that allows users to report problematic exams. The reporting process has two steps: first, selecting a reason for the report, and then selecting the specific questions that contain the issue.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    questions: {
      description: "Array of exam questions that can be reported",
      control: { type: "object" },
    },
    onCancel: {
      description: "Function called when the user cancels the report",
      action: "cancel",
    },
    onSubmit: {
      description:
        "Function called when the user submits the report. Receives reason and array of selected questions.",
      action: "submit",
    },
  },
} as Meta<typeof ReportExam>;

type Story = StoryObj<typeof ReportExam>;

export const Default: Story = {
  args: {
    questions: sampleQuestions,
    onCancel: action("onCancel"),
    onSubmit: action("onSubmit"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default view of the ReportExam component with sample exam questions.",
      },
    },
  },
};

export const FewQuestions: Story = {
  args: {
    questions: sampleQuestions.slice(0, 2),
    onCancel: action("onCancel"),
    onSubmit: action("onSubmit"),
  },
  parameters: {
    docs: {
      description: {
        story: "ReportExam with only a few questions to report.",
      },
    },
  },
};

export const ManyQuestions: Story = {
  args: {
    questions: [
      ...sampleQuestions,
      ...sampleQuestions.map((q) => ({
        ...q,
        id: `${q.id}-copy`,
        title: `Copy: ${q.title}`,
      })),
    ],
    onCancel: action("onCancel"),
    onSubmit: action("onSubmit"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "ReportExam with a longer list of questions, demonstrating how the component handles scrolling.",
      },
    },
  },
};

export const WithInteractions: Story = {
  args: {
    questions: sampleQuestions,
    onCancel: action("User cancelled the report"),
    onSubmit: (reason, questions) => {
      action("Report submitted")();
      console.log("Report reason:", reason);
      console.log("Reported questions:", questions);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "ReportExam with more detailed interaction logging. Check the console to see the selected reason and questions when submitting.",
      },
    },
  },
};

export const MobileView: Story = {
  args: {
    questions: sampleQuestions,
    onCancel: action("onCancel"),
    onSubmit: action("onSubmit"),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "ReportExam component displayed in a mobile viewport to ensure responsive design.",
      },
    },
  },
};
