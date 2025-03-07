import type { Meta, StoryObj } from "@storybook/react";
import { ProviderButton } from ".";

const meta: Meta<typeof ProviderButton> = {
  title: "Components/ProviderButton",
  component: ProviderButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: "select",
      options: ["facebook", "google", "apple", "x", "reddit"],
    },
    size: {
      control: "radio",
      options: ["default", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProviderButton>;

export const Facebook: Story = {
  args: {
    provider: "facebook",
    size: "default",
  },
};

export const Google: Story = {
  args: {
    provider: "google",
    size: "default",
  },
};

export const Apple: Story = {
  args: {
    provider: "apple",
    size: "default",
  },
};

export const X: Story = {
  args: {
    provider: "x",
    size: "default",
  },
};

export const Reddit: Story = {
  args: {
    provider: "reddit",
    size: "default",
  },
};

export const Large: Story = {
  args: {
    provider: "facebook",
    size: "large",
  },
};

export const CustomText: Story = {
  args: {
    provider: "google",
    text: "Continue with Google",
    size: "default",
  },
};

export const CustomIcon: Story = {
  args: {
    provider: "facebook",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="white" />
        <path d="M10 5L12.5 10L15 15H5L7.5 10L10 5Z" fill="#1877F2" />
      </svg>
    ),
    size: "default",
  },
};

export const AllProviders: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ProviderButton provider="facebook" />
      <ProviderButton provider="google" />
      <ProviderButton provider="apple" />
      <ProviderButton provider="x" />
      <ProviderButton provider="reddit" />
    </div>
  ),
};
