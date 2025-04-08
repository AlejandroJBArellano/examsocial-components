import type { Meta, StoryObj } from "@storybook/react";

import TakeExam from "./TakeExam";

export default {
  title: "Components/TakeExam",
  component: TakeExam,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type Story = StoryObj<typeof TakeExam>;

export const Default: Story = {
  args: {
    async onFinish() {
      console.log(
        "La función asíncrona se está ejecutando antes de abandonar la página...",
      );
      // Aquí puedes realizar operaciones asíncronas, como enviar datos al servidor.
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de una tarea asíncrona de 2 segundos
      console.log("La función asíncrona ha terminado.");
    },
    exam: {
      title: "Sample Exam",
      description: "This is a sample exam description.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA",
      categories: ["COMPUTER_SCIENCE"],
      currency: "USD",
      price: 0,
      advancedSettings: {
        showCorrectAnswers: true,
        sendEmailReport: true,
        leaderboard: true,
        passingScore: 80,
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
    },
  },
};
