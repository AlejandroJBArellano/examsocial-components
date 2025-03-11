import type { Meta, StoryObj } from "@storybook/react";

import Description from "./Description";

export default {
  title: "Components/ExamDetail/Description",
  component: Description,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    description: "This is a description",
    onStartExam: () => {},
    onFavorite: () => {},
    onBookmark: () => {},
  },
};
