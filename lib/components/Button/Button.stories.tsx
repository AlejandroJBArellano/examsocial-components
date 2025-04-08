import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button is a versatile component that allows users to trigger actions. It supports various themes and can be rounded.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    theme: "light",
    rounded: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    theme: "primary",
    rounded: false,
  },
};

export const Accent: Story = {
  args: {
    children: "Accent Button",
    theme: "accent",
    rounded: false,
  },
};

export const Extra: Story = {
  args: {
    children: "Extra Button",
    theme: "extra",
    rounded: false,
  },
};

export const Error: Story = {
  args: {
    children: "Error Button",
    theme: "feedback-error",
    rounded: false,
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded Button",
    theme: "light",
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    theme: "light",
    disabled: true,
  },
};

export const IndexButtonDefault: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button.Index index={1} status="done" />
      <Button.Index index={2} status="current" />
      <Button.Index index={3} status="pending" />
    </div>
  ),
};

export const IndexButtonSelected: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button.Index index={1} status="done" />
      <Button.Index index={2} status="current" />
      <Button.Index index={3} status="pending" />
    </div>
  ),
};

export const IndexButtonInteractive: Story = {
  render: function IndexButtonInteractiveRender() {
    const [selected, setSelected] = useState(1);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <Button.Index
              key={index}
              index={index}
              status={selected === index ? "current" : "done"}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <p>Selected: {selected}</p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button theme="light">Light</Button>
        <Button theme="primary">Primary</Button>
        <Button theme="accent">Accent</Button>
        <Button theme="extra">Extra</Button>
        <Button theme="feedback-error">Error</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button theme="light" rounded>
          Light Rounded
        </Button>
        <Button theme="primary" rounded>
          Primary Rounded
        </Button>
        <Button theme="accent" rounded>
          Accent Rounded
        </Button>
        <Button theme="extra" rounded>
          Extra Rounded
        </Button>
        <Button theme="feedback-error" rounded>
          Error Rounded
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button theme="light" disabled>
          Light Disabled
        </Button>
        <Button theme="primary" disabled>
          Primary Disabled
        </Button>
        <Button theme="accent" disabled>
          Accent Disabled
        </Button>
        <Button theme="extra" disabled>
          Extra Disabled
        </Button>
        <Button theme="feedback-error" disabled>
          Error Disabled
        </Button>
      </div>
    </div>
  ),
};
