import type { Meta, StoryObj } from "@storybook/react";

import Rating from "./Rating";

export default {
  title: "Components/ExamDetail/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Rating is a component used in the ExamDetail section to display a numerical rating with a star icon.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    count: 4.8,
  },
};
