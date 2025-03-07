import type { Meta, StoryObj } from "@storybook/react";

import Review from "./Review";

export default {
  title: "Components/SocialPost/Review",
  component: Review,
} as Meta;

type Story = StoryObj<typeof Review>;

export const Default: Story = {
  args: {
    exam: {
      title: "Exam Title",
      image: "https://placecats.com/neo/300/200",
    },
  },
};
