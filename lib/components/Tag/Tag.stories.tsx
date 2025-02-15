import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

const defaultChildren = "Test Tag";

export const Default: Story = {
  args: {
    children: defaultChildren,
  },
};

export const ThemeAccent: Story = {
  args: {
    children: defaultChildren,
    theme: "accent",
  },
};

export const ThemePrimary: Story = {
  args: {
    children: defaultChildren,
    theme: "primary",
  },
};

export const ThemeExtra: Story = {
  args: {
    children: defaultChildren,
    theme: "extra",
  },
};

export const ThemeSecondary: Story = {
  args: {
    children: defaultChildren,
    theme: "secondary",
  },
};

export const ThemeFeedbackError: Story = {
  args: {
    children: defaultChildren,
    theme: "feedback-error",
  },
};

export const ThemeFeedbackSuccess: Story = {
  args: {
    children: defaultChildren,
    theme: "feedback-success",
  },
};
