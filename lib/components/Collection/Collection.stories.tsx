import type { Meta, StoryObj } from "@storybook/react";
import Collection from "./Collection";

const meta: Meta<typeof Collection> = {
  title: "Components/Collection/Add",
  component: Collection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collection>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Collection.Add onClick={() => console.log("Add clicked")}>
          Add New Item
        </Collection.Add>
        <div className="rounded border p-4">Collection Item 1</div>
        <div className="rounded border p-4">Collection Item 2</div>
      </>
    ),
  },
};

export const WithAddOnly: Story = {
  args: {
    children: (
      <Collection.Add onClick={() => console.log("Add clicked")}>
        Add New Collection Item
      </Collection.Add>
    ),
  },
};
