import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Icon is a component that displays Material Symbols icons. It supports different variants, sizes, and colors.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the Material Symbol icon",
    },
    variant: {
      control: "select",
      options: ["outlined", "sharp", "rounded"],
      description: "The variant of the icon",
    },
    weight: {
      control: { type: "range", min: 100, max: 700, step: 100 },
      description: "The weight of the icon (100-700)",
    },
    grade: {
      control: { type: "select", options: [-25, 0, 200] },
      description: "The grade of the icon (-25, 0, 200)",
    },
    size: {
      control: { type: "range", min: 16, max: 48, step: 4 },
      description: "The size of the icon in pixels",
    },
    filled: {
      control: "boolean",
      description: "Whether the icon is filled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "home",
    variant: "rounded",
    size: 24,
  },
};

export const Filled: Story = {
  args: {
    name: "favorite",
    variant: "rounded",
    size: 24,
  },
};

export const Bold: Story = {
  args: {
    name: "settings",
    variant: "outlined",
    weight: 700,
    grade: 0,
    size: 24,
  },
};

export const Large: Story = {
  args: {
    name: "star",
    variant: "sharp",
    weight: 400,
    grade: 0,
    size: 40,
  },
};

export const IconGrid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <Icon name="home" />
        <span className="mt-2 text-xs">home</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="settings" />
        <span className="mt-2 text-xs">settings</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="favorite" filled />
        <span className="mt-2 text-xs">favorite</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="star" filled />
        <span className="mt-2 text-xs">star</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="person" />
        <span className="mt-2 text-xs">person</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="search" />
        <span className="mt-2 text-xs">search</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="notifications" />
        <span className="mt-2 text-xs">notifications</span>
      </div>
      <div className="flex flex-col items-center">
        <Icon name="mail" />
        <span className="mt-2 text-xs">mail</span>
      </div>
    </div>
  ),
};
