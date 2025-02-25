import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
} as Meta;

type Story = StoryObj<typeof Tab>;

const defaultChildren = "Tab";

export const Default: Story = {
  args: {
    children: defaultChildren,
  },
};

export const Selected: Story = {
  args: {
    children: defaultChildren,
    selected: true,
  },
};
