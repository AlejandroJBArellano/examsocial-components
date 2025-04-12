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
    fileName: {
      control: "text",
      description: "Filename for downloaded QR code",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "qr-code" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    bgColor: {
      control: "color",
      description: "Background color of the QR code",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "transparent" },
      },
    },
    fgColor: {
      control: "color",
      description: "Foreground color of the QR code",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "black" },
      },
    },
    logoImage: {
      control: "text",
      description:
        "URL to a logo image to display in the center of the QR code",
      table: {
        type: { summary: "string" },
      },
    },
    logoWidth: {
      control: { type: "number", min: 20, max: 200 },
      description: "Width of the logo in pixels",
      table: {
        type: { summary: "number" },
      },
    },
    logoHeight: {
      control: { type: "number", min: 20, max: 200 },
      description: "Height of the logo in pixels",
      table: {
        type: { summary: "number" },
      },
    },
    quietZone: {
      control: { type: "number", min: 0, max: 40 },
      description: "Size of the quiet zone around the QR code",
      table: {
        type: { summary: "number" },
      },
    },
    size: {
      control: { type: "number", min: 100, max: 500 },
      description: "Size of the QR code in pixels",
      table: {
        type: { summary: "number" },
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
    fileName: "custom-qr-code",
  },
};

export const WithCustomColors: Story = {
  args: {
    fgColor: "#4f46e5", // Indigo color
    bgColor: "#f3f4f6", // Light gray background
  },
};

export const WithLogo: Story = {
  args: {
    logoImage: "https://picsum.photos/100",
    logoWidth: 40,
    logoHeight: 40,
    fileName: "logo-qr-code",
  },
};

export const WithCustomSize: Story = {
  args: {
    size: 300,
    quietZone: 10,
  },
};

export const WithCustomDownload: Story = {
  args: {
    fileName: "my-special-qr-code",
    onDownload: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "QR code with custom download filename and callback.",
      },
    },
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
