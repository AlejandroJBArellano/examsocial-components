import type { Meta, StoryObj } from "@storybook/react";

import AnswerOption from "./AnswerOption";

export default {
  title: "Components/AnswerOption",
  component: AnswerOption,
} as Meta;

type Story = StoryObj<typeof AnswerOption>;

export const Default: Story = {
  args: {
    children: "Answer Option",
  },
};

export const Selectable: Story = {
  args: {
    children: "Answer Option",
    type: "selectable",
  },
};

export const Checked: Story = {
  args: {
    children: "Answer Option",
    type: "selectable",
    checked: true,
  },
};

export const ViewOnly: Story = {
  args: {
    children: "Answer Option",
    type: "viewOnly",
  },
};
