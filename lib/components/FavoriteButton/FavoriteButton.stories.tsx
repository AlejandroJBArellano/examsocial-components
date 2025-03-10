import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from ".";

const meta: Meta<typeof FavoriteButton> = {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "FavoriteButton is a component that allows users to mark items as favorites. It changes state when clicked and can display a tooltip with customizable text and position.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tooltipSide: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    isFavorite: false,
    size: "default",
    tooltipText: "Add to favorites",
  },
};

export const Favorited: Story = {
  args: {
    isFavorite: true,
    size: "default",
    tooltipText: "Add to favorites",
  },
};

export const Large: Story = {
  args: {
    isFavorite: false,
    size: "large",
    tooltipText: "Add to favorites",
    tooltipSide: "left",
  },
};

export const LargeFavorited: Story = {
  args: {
    isFavorite: true,
    size: "large",
    tooltipText: "Add to favorites",
    tooltipSide: "left",
  },
};

export const WithTooltipTop: Story = {
  args: {
    isFavorite: false,
    size: "large",
    tooltipText: "Add to favorites",
    tooltipSide: "top",
  },
};
