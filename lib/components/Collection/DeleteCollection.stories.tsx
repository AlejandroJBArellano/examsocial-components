import type { Meta, StoryObj } from "@storybook/react";
import { DeleteCollection } from "./DeleteCollection";

const meta = {
  title: "Components/Collection/DeleteCollection",
  component: DeleteCollection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A confirmation dialog component for deleting a collection. Shows the number of exams that will be deleted.",
      },
    },
  },
  argTypes: {
    examCount: {
      control: { type: "number" },
      description: "Number of exams in the collection",
    },
    onCancel: { action: "cancelled" },
    onAccept: { action: "accepted" },
  },
  tags: ["autodocs"],
} as Meta<typeof DeleteCollection>;

export default meta;
type Story = StoryObj<typeof DeleteCollection>;

export const Default: Story = {
  args: {
    examCount: 39,
    onCancel: () => console.log("Cancelled deletion"),
    onAccept: () => console.log("Confirmed deletion"),
  },
};

export const SingleExam: Story = {
  args: {
    examCount: 1,
    onCancel: () => console.log("Cancelled deletion"),
    onAccept: () => console.log("Confirmed deletion"),
  },
};
