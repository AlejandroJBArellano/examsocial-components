import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";

const meta = {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: "#",
        children: "Home",
        icon: "home",
      },
      {
        href: "#",
        children: "Profile",
        icon: "person",
      },
      {
        href: "#",
        children: "Settings",
        icon: "settings",
      },
    ],
  },
};

export const WithSelectedItem: Story = {
  args: {
    items: [
      {
        href: "#",
        children: "Home",
        icon: "home",
        isSelected: true,
      },
      {
        href: "#",
        children: "Profile",
        icon: "person",
      },
      {
        href: "#",
        children: "Settings",
        icon: "settings",
      },
    ],
  },
};

export const WithCompressedItems: Story = {
  args: {
    items: [
      {
        href: "#",
        children: "Home",
        icon: "home",
        isCompressed: true,
        tooltipText: "Go to Home",
      },
      {
        href: "#",
        children: "Profile",
        icon: "person",
        isCompressed: true,
        tooltipText: "View Profile",
      },
      {
        href: "#",
        children: "Settings",
        icon: "settings",
        isCompressed: true,
        tooltipText: "Open Settings",
      },
    ],
  },
};

export const WithCTA: Story = {
  args: {
    items: [
      {
        href: "#",
        children: "Home",
        icon: "home",
      },
      {
        href: "#",
        children: "Profile",
        icon: "person",
      },
      {
        href: "#",
        children: "Upgrade Now",
        icon: "workspace_premium",
        isCTA: true,
      },
    ],
  },
};
