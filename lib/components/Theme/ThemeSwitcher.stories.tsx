import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ThemeProvider, ThemeSwitcher, useTheme } from "./index";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="space-y-6 p-6">
          <Story />
          <ThemePreviewBoard />
        </div>
      </ThemeProvider>
    ),
  ],
};

const ThemePreviewBoard = () => {
  const { theme } = useTheme();
  return (
    <div className="rounded-xl border-2 border-black bg-light p-6 shadow-right space-y-4">
      <div className="flex items-center justify-between border-b pb-3">
        <h3 className="text-lg font-bold">Theme Preview: {theme}</h3>
        <span className="text-xs uppercase font-mono px-2 py-1 border border-black bg-primary-tint rounded">
          Active Theme
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button theme="primary">Primary Button</Button>
        <Button theme="accent">Accent Button</Button>
        <Button theme="extra">Extra Button</Button>
        <Button theme="feedback-error">Feedback Error</Button>
        <Button theme="light">Light Button</Button>
      </div>
    </div>
  );
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Pills: Story = {
  args: {
    variant: "pills",
    showColors: true,
  },
};

export const Dropdown: Story = {
  args: {
    variant: "dropdown",
    showColors: true,
  },
};

export const WithoutColors: Story = {
  args: {
    variant: "pills",
    showColors: false,
  },
};
