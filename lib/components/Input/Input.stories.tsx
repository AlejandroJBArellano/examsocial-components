import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Icon";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input is a component that allows users to enter text. It supports left and right icons, error states, and custom styling.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
  },
};

export const WithValue: Story = {
  args: {
    value: "Input value",
    placeholder: "Enter text here",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Search...",
    LeftIcon: <Icon name="search" size={24} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Enter email",
    RightIcon: <Icon name="mail" size={24} />,
    className: "w-full",
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Search...",
    LeftIcon: <Icon name="search" size={24} />,
    RightIcon: <Icon name="close" size={24} />,
    className: "w-full",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter text here",
    error: true,
  },
};

export const WithErrorAndIcon: Story = {
  args: {
    placeholder: "Enter text here",
    error: true,
    RightIcon: <Icon name="warning" size={24} />,
    className: "w-full",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <Input placeholder="Default input" />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">With Left Icon</p>
        <Input
          placeholder="Search..."
          LeftIcon={<Icon name="search" size={24} />}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">With Right Icon</p>
        <Input
          placeholder="Enter email"
          className="w-full"
          RightIcon={<Icon name="mail" size={24} />}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">With Both Icons</p>
        <Input
          placeholder="Search..."
          className="w-full"
          LeftIcon={<Icon name="search" size={24} />}
          RightIcon={<Icon name="close" size={24} />}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Error State</p>
        <Input placeholder="Invalid input" error />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Error with Icon</p>
        <Input
          placeholder="Invalid input"
          error
          className="w-full"
          RightIcon={<Icon name="warning" size={24} />}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Disabled</p>
        <Input placeholder="Disabled input" disabled />
      </div>
    </div>
  ),
};
