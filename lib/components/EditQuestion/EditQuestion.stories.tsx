import type { Meta, StoryObj } from "@storybook/react";

import EditQuestion from "./EditQuestion";

export default {
  title: "Components/EditQuestion",
  component: EditQuestion,
} as Meta;

type Story = StoryObj<typeof EditQuestion>;

export const Default: Story = {
  args: {
    initialValues: {
      title: "What is the capital of France?",
      _id: "q1",
      options: [
        { text: "Paris", correct: true, _id: "o1" },
        { text: "London", correct: false, _id: "o2" },
        { text: "Berlin", correct: false, _id: "o3" },
        { text: "Madrid", correct: false, _id: "o4" },
      ],
    },
    onCancel: () => {},
    onSubmit: () => {},
  },
};
