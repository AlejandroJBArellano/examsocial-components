import type { Meta, StoryObj } from "@storybook/react";
import ExamCard from "./ExamCard";

export default {
  title: "Components/ExamCard",
  component: ExamCard,
} as Meta<typeof ExamCard>;

type Story = StoryObj<typeof ExamCard>;

export const Default: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget.",
    image: "https://placehold.co/320x180",
    link: "#",
    small: false,
    tag: "Tag",
    time: "1h 30m",
    title: "Title",
  },
};
