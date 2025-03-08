import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Textarea is a component that allows users to enter multi-line text. It supports error states and custom styling.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    value:
      "This is a textarea with some content.\nIt supports multiple lines of text.",
    placeholder: "Enter text here",
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter text here",
    error: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
    rows: 4,
  },
};

export const Resizable: Story = {
  args: {
    placeholder: "This textarea can be resized",
    rows: 4,
    className: "resize",
  },
};

export const NonResizable: Story = {
  args: {
    placeholder: "This textarea cannot be resized",
    rows: 4,
    className: "resize-none",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <Textarea placeholder="Default textarea" rows={4} />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">With Value</p>
        <Textarea
          defaultValue="This is a textarea with some content.\nIt supports multiple lines of text."
          rows={4}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Error State</p>
        <Textarea placeholder="Invalid input" error={true} rows={4} />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Disabled</p>
        <Textarea placeholder="Disabled textarea" disabled rows={4} />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Resizable</p>
        <Textarea
          placeholder="This textarea can be resized"
          className="resize"
          rows={4}
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Non-Resizable</p>
        <Textarea
          placeholder="This textarea cannot be resized"
          className="resize-none"
          rows={4}
        />
      </div>
    </div>
  ),
};
