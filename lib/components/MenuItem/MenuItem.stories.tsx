import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "MenuItem is a component that represents a menu item with different states and contents. It can display an icon and text, or just an icon in compressed mode.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: [
        "workspace_premium",
        "list_alt_add",
        "replay",
        "add",
        "edit",
        "delete",
        "favorite",
        "bookmark",
        "home",
      ],
    },
    isSelected: {
      control: "boolean",
    },
    isCompressed: {
      control: "boolean",
    },
    isCTA: {
      control: "boolean",
    },
    tooltipText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Historia por defecto
export const Default: Story = {
  args: {
    children: "Home",
    icon: "home",
    isSelected: false,
    isCompressed: false,
  },
};

// Historia con elemento seleccionado
export const Selected: Story = {
  args: {
    children: "Home",
    icon: "home",
    isSelected: true,
    isCompressed: false,
  },
};

// Historia con elemento comprimido
export const Compressed: Story = {
  args: {
    children: "Home",
    icon: "home",
    isSelected: false,
    isCompressed: true,
  },
};

// Historia con elemento comprimido y seleccionado
export const CompressedSelected: Story = {
  args: {
    children: "Home",
    icon: "home",
    isSelected: true,
    isCompressed: true,
  },
};

// Historia con contenido CTA
export const CTA: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    isSelected: false,
    isCompressed: false,
    isCTA: true,
  },
};

// Historia con contenido CTA seleccionado
export const CTASelected: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    isSelected: true,
    isCompressed: false,
    isCTA: true,
  },
};

// Historia con contenido CTA comprimido
export const CTACompressed: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    isSelected: false,
    isCompressed: true,
    isCTA: true,
  },
};

// Historia con tooltip
export const WithTooltip: Story = {
  args: {
    children: "Create",
    icon: "list_alt_add",
    isSelected: false,
    isCompressed: true,
    tooltipText: "Create new item",
    isCTA: true,
  },
};
