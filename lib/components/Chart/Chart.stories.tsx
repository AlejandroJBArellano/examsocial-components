import type { Meta, StoryObj } from "@storybook/react";
import Chart from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Chart is a component for visualizing data in a bar chart format. It supports different color themes and can be used to display various types of data like exam results by grade, results by question, etc.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "accent", "extra"],
      defaultValue: "primary",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const ResultsByGrade: Story = {
  args: {
    title: "Results by grade",
    variant: "primary",
    data: [
      { label: "A", value: 80 },
      { label: "B", value: 65 },
      { label: "C", value: 40 },
      { label: "D", value: 30 },
      { label: "E", value: 20 },
      { label: "F", value: 10 },
    ],
    maxY: 100,
  },
};

export const ResultsByQuestion: Story = {
  args: {
    title: "Results by question",
    variant: "secondary",
    data: [
      { label: "Q1", value: 90 },
      { label: "Q2", value: 45 },
      { label: "Q3", value: 75 },
      { label: "Q4", value: 60 },
      { label: "Q5", value: 35 },
      { label: "Q6", value: 80 },
      { label: "Q7", value: 55 },
      { label: "Q8", value: 65 },
    ],
    maxY: 100,
  },
};

export const ExamScores: Story = {
  args: {
    title: "Exam Scores Distribution",
    variant: "accent",
    data: [
      { label: "0-10", value: 5 },
      { label: "11-20", value: 8 },
      { label: "21-30", value: 12 },
      { label: "31-40", value: 15 },
      { label: "41-50", value: 22 },
      { label: "51-60", value: 30 },
      { label: "61-70", value: 40 },
      { label: "71-80", value: 35 },
      { label: "81-90", value: 25 },
      { label: "91-100", value: 15 },
    ],
    maxY: 50,
  },
};

export const MonthlyProgress: Story = {
  args: {
    title: "Monthly Progress",
    variant: "extra",
    data: [
      { label: "Jan", value: 45 },
      { label: "Feb", value: 52 },
      { label: "Mar", value: 60 },
      { label: "Apr", value: 58 },
      { label: "May", value: 65 },
      { label: "Jun", value: 72 },
    ],
    maxY: 100,
  },
};
