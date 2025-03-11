import type { Meta, StoryObj } from "@storybook/react";

import Description from "./Description";

const meta: Meta<typeof Description> = {
  title: "Components/ExamDetail/Description",
  component: Description,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Description is a component that displays exam information with 'read more/less' functionality for long descriptions. It includes actions such as favorites, bookmarks, and a start exam button.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Description>;

// Long text to demonstrate the "read more" functionality
const longText = `Welcome to the Svelte 5 Quiz! This quiz is designed to test your knowledge and understanding of Svelte 5, a powerful and innovative component framework for building user interfaces. The quiz consists of 10 multiple-choice questions that cover various aspects of Svelte 5, including reactivity, component creation, lifecycle functions, form handling, and project setup.

Each question is carefully crafted to not only test your knowledge of Svelte 5 but also to compare it with other popular frameworks such as React, Vue.js, and Angular. This will help you understand the unique features and advantages of Svelte 5 in the broader context of modern web development.`;

// Default story
export const Default: Story = {
  args: {
    description: "This is a description for an exam about Svelte 5.",
    onStartExam: () => console.log("Start exam clicked"),
    onFavorite: () => console.log("Favorite clicked"),
    onBookmark: () => console.log("Bookmark clicked"),
  },
};

// Story with long description text
export const WithLongDescription: Story = {
  args: {
    description: longText,
    onStartExam: () => console.log("Start exam clicked"),
    onFavorite: () => console.log("Favorite clicked"),
    onBookmark: () => console.log("Bookmark clicked"),
  },
};

// Story with XL size
export const XLSize: Story = {
  args: {
    description: longText,
    onStartExam: () => console.log("Start exam clicked"),
    onFavorite: () => console.log("Favorite clicked"),
    onBookmark: () => console.log("Bookmark clicked"),
    size: "xl",
  },
};

// Story with favorite active
export const WithFavoriteActive: Story = {
  args: {
    description: "This is a description for an exam that has been favorited.",
    onStartExam: () => console.log("Start exam clicked"),
    onFavorite: () => console.log("Favorite clicked"),
    onBookmark: () => console.log("Bookmark clicked"),
  },
};

// Story with bookmark active
export const WithBookmarkActive: Story = {
  args: {
    description: "This is a description for an exam that has been bookmarked.",
    onStartExam: () => console.log("Start exam clicked"),
    onFavorite: () => console.log("Favorite clicked"),
    onBookmark: () => console.log("Bookmark clicked"),
  },
};

// Story showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-2 font-bold">Default</h3>
        <Description
          description="This is a description for a Svelte 5 exam."
          onStartExam={() => console.log("Start exam clicked")}
          onFavorite={() => console.log("Favorite clicked")}
          onBookmark={() => console.log("Bookmark clicked")}
        />
      </div>

      <div>
        <h3 className="mb-2 font-bold">Long Description</h3>
        <Description
          description={longText}
          onStartExam={() => console.log("Start exam clicked")}
          onFavorite={() => console.log("Favorite clicked")}
          onBookmark={() => console.log("Bookmark clicked")}
        />
      </div>

      <div>
        <h3 className="mb-2 font-bold">XL Size</h3>
        <Description
          description={longText}
          onStartExam={() => console.log("Start exam clicked")}
          onFavorite={() => console.log("Favorite clicked")}
          onBookmark={() => console.log("Bookmark clicked")}
          size="xl"
        />
      </div>
    </div>
  ),
};
