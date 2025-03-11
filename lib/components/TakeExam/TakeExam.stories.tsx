import type { Meta, StoryObj } from "@storybook/react";

import TakeExam from "./TakeExam";

export default {
  title: "Components/TakeExam",
  component: TakeExam,
} as Meta;

type Story = StoryObj<typeof TakeExam>;

export const Default: Story = {
  args: {
    exam: {
      title: "Sample Exam",
      description: "This is a sample exam description.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA",
      advancedSettings: {
        randomizeQuestionOrder: true,
        showCorrectAnswers: false,
        sendEmailReport: true,
        leaderboard: true,
        maxAttempts: 3,
        price: 0,
        feedback: [
          {
            message: "Great job!",
            condition: "GREATER_THAN",
            gt: 80,
          },
        ],
        privacy: {
          setting: "PUBLIC",
          invitees: [],
          password: "",
        },
        timing: {
          setting: "TOTAL",
          hours: 1,
          minutes: 30,
          seconds: 0,
        },
        theme: "WHITEBOARD",
      },
      contents: [
        {
          type: "TEXT",
          text: "Welcome to the exam!",
        },
      ],
      questions: [
        {
          _id: "q1",
          title: "What is 2 + 2?",
          options: [
            { _id: "q1o1", text: "3", correct: false },
            { _id: "q1o2", text: "4", correct: true },
          ],
        },
        {
          _id: "q2",
          title: "What is the capital of France?",
          options: [
            { _id: "q2o1", text: "Berlin", correct: false },
            { _id: "q2o2", text: "Madrid", correct: false },
            { _id: "q2o3", text: "Paris", correct: true },
            { _id: "q2o4", text: "Rome", correct: false },
          ],
        },
        {
          _id: "q3",
          title: "Which planet is known as the Red Planet?",
          options: [
            { _id: "q3o1", text: "Earth", correct: false },
            { _id: "q3o2", text: "Mars", correct: true },
            { _id: "q3o3", text: "Jupiter", correct: false },
            { _id: "q3o4", text: "Saturn", correct: false },
          ],
        },
        {
          _id: "q4",
          title: "What is the largest ocean on Earth?",
          options: [
            { _id: "q4o1", text: "Atlantic Ocean", correct: false },
            { _id: "q4o2", text: "Indian Ocean", correct: false },
            { _id: "q4o3", text: "Arctic Ocean", correct: false },
            { _id: "q4o4", text: "Pacific Ocean", correct: true },
          ],
        },
      ],
    },
  },
};
