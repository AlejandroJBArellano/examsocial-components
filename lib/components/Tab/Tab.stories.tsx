import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";

export default {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Tab>;

const defaultChildren = "Tab";

export const Default: Story = {
  args: {
    children: defaultChildren,
    theme: "primary",
  },
};

export const Selected: Story = {
  args: {
    children: defaultChildren,
    selected: true,
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: defaultChildren,
    theme: "secondary",
  },
};

export const SecondarySelected: Story = {
  args: {
    children: defaultChildren,
    selected: true,
    theme: "secondary",
  },
};
