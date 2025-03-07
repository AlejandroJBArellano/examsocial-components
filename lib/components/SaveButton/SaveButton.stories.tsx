import type { Meta, StoryObj } from "@storybook/react";
import SaveButton from "./SaveButton";

const meta: Meta<typeof SaveButton> = {
  title: "Components/SaveButton",
  component: SaveButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SaveButton es un componente que permite a los usuarios guardar elementos en una colección. Cambia de estado al hacer clic y muestra un tooltip en tamaño grande.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {
  args: {
    isSaved: false,
    size: "default",
  },
};

export const Saved: Story = {
  args: {
    isSaved: true,
    size: "default",
  },
};

export const Large: Story = {
  args: {
    isSaved: false,
    size: "large",
    tooltipText: "Add to collection",
  },
};

export const LargeSaved: Story = {
  args: {
    isSaved: true,
    size: "large",
    tooltipText: "Remove from collection",
  },
};

export const CustomTooltip: Story = {
  args: {
    isSaved: false,
    size: "large",
    tooltipText: "Guardar en mi colección",
    tooltipSide: "top",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <SaveButton size="default" isSaved={false} />
        <span>Default</span>
      </div>
      <div className="flex items-center gap-4">
        <SaveButton size="default" isSaved={true} />
        <span>Default (Saved)</span>
      </div>
      <div className="flex items-center gap-4">
        <SaveButton
          size="large"
          isSaved={false}
          tooltipText="Add to collection"
        />
        <span>Large with tooltip</span>
      </div>
      <div className="flex items-center gap-4">
        <SaveButton
          size="large"
          isSaved={true}
          tooltipText="Remove from collection"
        />
        <span>Large with tooltip (Saved)</span>
      </div>
    </div>
  ),
};
