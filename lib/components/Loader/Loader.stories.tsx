import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "Width of the loader in pixels",
    },
    height: {
      control: { type: "number" },
      description: "Height of the loader in pixels",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    className: "animate-spin fill-primary",
  },
};

export const Large: Story = {
  args: {
    width: 48,
    height: 48,
    className: "animate-spin",
  },
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
    className: "animate-spin",
  },
};

export const Colored: Story = {
  args: {
    width: 24,
    height: 24,
    className: "animate-spin fill-primary",
  },
};

export const ErrorColored: Story = {
  args: {
    width: 24,
    height: 24,
    className: "animate-spin fill-feedback-error",
  },
};

export const AccentColored: Story = {
  args: {
    width: 24,
    height: 24,
    className: "animate-spin fill-accent",
  },
};

export const ExtraColored: Story = {
  args: {
    width: 24,
    height: 24,
    className: "animate-spin fill-extra",
  },
};
