import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Components/ExamDetail/Header",
  component: Header,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Header is a component used in the ExamDetail section to display rating information with a star icon.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    rating: 4.8,
    authorName: "John Doe",
    category: "Math",
    duration: { hours: 1, minutes: 30 },
    imageUrl: "https://via.placeholder.com/150",
    participants: 100,
    title: "Math Exam",
  },
};
