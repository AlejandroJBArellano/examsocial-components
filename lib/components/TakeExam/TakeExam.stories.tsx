import type { Meta, StoryObj } from "@storybook/react";

import { Exam } from "@/types";
import TakeExam from "./TakeExam";

export default {
  title: "Components/TakeExam",
  component: TakeExam,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type Story = StoryObj<typeof TakeExam>;

const examDefault: Exam = {
  title: "Sample Exam",
  description: "This is a sample exam description.",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA",
  categories: ["COMPUTER_SCIENCE"],
  currency: "USD",
  price: 0,
  privacy: {
    setting: "PUBLIC",
  },
  advancedSettings: {
    showCorrectAnswers: true,
    sendEmailReport: true,
    leaderboard: true,
    passingScore: 80,
    timing: {
      setting: "TOTAL",
      hours: 1,
      minutes: 30,
      seconds: 0,
    },
  },
  theme: "WHITEBOARD",
  contents: [
    {
      type: "TEXT",
      text: "Welcome to the exam!",
    },
  ],
  questions: [
    {
      id: "q1",
      title: "What is 2 + 2?",
      options: [
        { id: "q1o1", text: "3" },
        { id: "q1o2", text: "4" },
      ],
    },
    {
      id: "q2",
      title: "What is the capital of France?",
      options: [
        { id: "q2o1", text: "Berlin" },
        { id: "q2o2", text: "Madrid" },
        { id: "q2o3", text: "Paris" },
        { id: "q2o4", text: "Rome" },
      ],
    },
    {
      id: "q3",
      title: "Which planet is known as the Red Planet?",
      options: [
        { id: "q3o1", text: "Earth" },
        { id: "q3o2", text: "Mars" },
        { id: "q3o3", text: "Jupiter" },
        { id: "q3o4", text: "Saturn" },
      ],
    },
    {
      id: "q4",
      title: "What is the largest ocean on Earth?",
      options: [
        { id: "q4o1", text: "Atlantic Ocean" },
        { id: "q4o2", text: "Indian Ocean" },
        { id: "q4o3", text: "Arctic Ocean" },
        { id: "q4o4", text: "Pacific Ocean" },
      ],
    },
  ],
};

export const Default: Story = {
  args: {
    async onFinish(selection, reason) {
      console.log({ selection, reason });
      console.log(
        "La función asíncrona se está ejecutando antes de abandonar la página...",
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("La función asíncrona ha terminado.");
    },
    exam: examDefault,
  },
};

export const NoTimeLimit: Story = {
  args: {
    ...Default.args,
    exam: {
      ...examDefault,
      advancedSettings: {
        ...examDefault.advancedSettings,
        timing: {
          setting: "NONE",
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      },
    },
  },
};

export const PerQuestionTiming: Story = {
  name: "WIP: Per Question Timing",
  args: {
    ...Default.args,
    exam: {
      ...examDefault,
      advancedSettings: {
        ...examDefault.advancedSettings,
        timing: {
          setting: "PER_QUESTION",
          hours: 0,
          minutes: 1,
          seconds: 30,
        },
      },
    },
  },
};

export const CustomTiming: Story = {
  args: {
    ...Default.args,
    exam: {
      ...examDefault,
      advancedSettings: {
        ...examDefault.advancedSettings,
        timing: {
          setting: "CUSTOM",
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      },
    },
  },
};

export const PrivateExam: Story = {
  args: {
    ...Default.args,
    exam: {
      ...examDefault,
      privacy: {
        setting: "PRIVATE",
      },
    },
  },
};

export const PaidExam: Story = {
  args: {
    ...Default.args,
    exam: {
      ...examDefault,
      price: 9.99,
    },
  },
};
