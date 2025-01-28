import type { Meta, StoryObj } from "@storybook/react";
import Comment from "./Comment";

export default {
  title: "Components/Comment",
  component: Comment,
} as Meta<typeof Comment>;

type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {
    user: {
      name: "Lana Del Rey",
      avatar: "",
    },
    children: "This is a comment",
    rating: 3,
  },
};
