import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import QRCodeCard from "./QRCodeCard";

const meta: Meta<typeof QRCodeCard> = {
  title: "Components/ExamDetail/QRCodeCard",
  component: QRCodeCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A QR code card component that allows users to view, share, and download a QR code.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      control: "text",
      description: "URL to encode in the QR code",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "current page URL" },
      },
    },
    alt: {
      control: "text",
      description: "Alt text for the QR code",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "QR code for the current page" },
      },
    },
    onShare: { action: "shared" },
    onDownload: { action: "downloaded" },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QRCodeCard>;

export const Default: Story = {
  args: {},
};

export const WithCustomURL: Story = {
  args: {
    url: "https://example.com/my-custom-url",
    alt: "QR code for example.com",
  },
};

export const WithCustomClasses: Story = {
  args: {
    className: "shadow-lg",
  },
};

export const WithCallbacks: Story = {
  args: {
    onShare: fn(),
    onDownload: fn(),
  },
};

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test different QRCodeCard configurations.",
      },
    },
  },
};
