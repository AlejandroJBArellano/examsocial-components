import type { Meta, StoryObj } from "@storybook/react";
import LibraryItem from "./Item";

const meta: Meta<typeof LibraryItem> = {
  title: "Components/Library/Item",
  component: LibraryItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "LibraryItem is a component that displays a title with an arrow icon and content below it. It's typically used in library or content listing interfaces.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LibraryItem>;

export const Default: Story = {
  args: {
    title: "Library Item Title",
    children:
      "This is the content of the library item. It can contain any text or components.",
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Reference",
    children: "Brief description",
  },
};

export const LongContent: Story = {
  args: {
    title: "Detailed Guide",
    children:
      "This is a more detailed description that spans multiple lines. It provides comprehensive information about the item and can include various details that might be relevant to the user. The content is displayed below the title and arrow icon.",
  },
};

export const WithHTMLContent: Story = {
  render: () => (
    <LibraryItem title="HTML Content Example">
      <div>
        <p>
          This example shows how the LibraryItem can contain{" "}
          <strong>HTML content</strong>.
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    </LibraryItem>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <div className="w-80">
      <LibraryItem title="Getting Started">
        Introduction to the platform and basic concepts.
      </LibraryItem>
      <LibraryItem title="Advanced Features">
        Detailed explanation of advanced features and capabilities.
      </LibraryItem>
      <LibraryItem title="Troubleshooting">
        Common issues and their solutions.
      </LibraryItem>
    </div>
  ),
};
