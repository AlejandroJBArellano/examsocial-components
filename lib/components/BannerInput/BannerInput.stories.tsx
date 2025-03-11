import type { Meta, StoryObj } from "@storybook/react";
import BannerInput from "./BannerInput";

const meta: Meta<typeof BannerInput> = {
  title: "Components/BannerInput",
  component: BannerInput,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "BannerInput is a component that allows users to upload banner images. It displays a photo icon and handles file selection.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BannerInput>;

export const Default: Story = {
  args: {
    onChange: (e) => console.log("File selected:", e.target.files),
  },
};

export const WithCustomHandler: Story = {
  args: {
    onChange: (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        alert(`Selected ${files.length} file(s). First file: ${files[0].name}`);
      }
    },
  },
};
