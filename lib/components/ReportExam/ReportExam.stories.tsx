import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import ReportExam from "./ReportExam";

export default {
  title: "Components/ReportExam",
  component: ReportExam,
  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof ReportExam>;

export const Default: Story = {
  args: {
    questions: [
      {
        _id: "1",
        title: "Is this exam non-educational?",
        options: [
          { text: "Yes", _id: "1-1" },
          { text: "No", _id: "1-2" },
        ],
      },
      {
        _id: "2",
        title: "Does this exam contain false information?",
        options: [
          { text: "Yes", _id: "2-1" },
          { text: "No", _id: "2-2" },
        ],
      },
      {
        _id: "3",
        title: "Does this exam contain explicit content?",
        options: [
          { text: "Yes", _id: "3-1" },
          { text: "No", _id: "3-2" },
        ],
      },
      {
        _id: "4",
        title: "Does this exam contain hateful or offensive content?",
        options: [
          { text: "Yes", _id: "4-1" },
          { text: "No", _id: "4-2" },
        ],
      },
      {
        _id: "5",
        title: "Is this exam spam?",
        options: [
          { text: "Yes", _id: "5-1" },
          { text: "No", _id: "5-2" },
        ],
      },
      {
        _id: "6",
        title: "Does this exam contain copyright infringement?",
        options: [
          { text: "Yes", _id: "6-1" },
          { text: "No", _id: "6-2" },
        ],
      },
      {
        _id: "7",
        title: "Please provide more information",
        options: [
          { text: "Yes", _id: "7-1" },
          { text: "No", _id: "7-2" },
        ],
      },
    ],
    onCancel: action("onCancel"),
    onSubmit: action("onSubmit"),
  },
};
