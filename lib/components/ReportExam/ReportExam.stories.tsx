import type { Meta, StoryObj } from "@storybook/react";

import ReportExam from "./ReportExam";

export default {
  title: "Components/ReportExam",
  component: ReportExam,
} as Meta;

type Story = StoryObj<typeof ReportExam>;

export const Default: Story = {
  args: {
    questions: [
      {
        id: "1",
        question: "Is this exam non-educational?",
      },
      {
        id: "2",
        question: "Does this exam contain false information?",
      },
      {
        id: "3",
        question: "Does this exam contain explicit content?",
      },
      {
        id: "4",
        question: "Does this exam contain hateful or offensive content?",
      },
      {
        id: "5",
        question: "Is this exam spam?",
      },
      {
        id: "6",
        question: "Does this exam contain copyright infringement?",
      },
      {
        id: "7",
        question: "Please provide more information",
      },
    ],
  },
};
