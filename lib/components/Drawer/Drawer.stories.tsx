import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";

const meta = {
  title: "Components/Drawer",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Drawer is a bottom sheet component that slides up from the bottom of the screen. It's typically used for displaying additional content or actions while keeping the context of the current page.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <div className="flex-1 rounded-t-[10px] bg-light p-4">
            <Drawer.Handle />
            <div className="mx-auto max-w-md space-y-8">
              <Drawer.Title>Drawer Component</Drawer.Title>
              <div>
                <p className="mb-2 text-gray-600">
                  This component can be used as a Dialog replacement on mobile
                  and tablet devices.
                </p>
                <p className="mb-2 text-gray-600">
                  This is a simple drawer with a trigger and title centered
                  using the Heading4 component.
                </p>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger className="rounded bg-blue-500 px-4 py-2 text-white">
        Open Custom Drawer
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <div className="flex-1 rounded-t-[10px] bg-light p-4">
            <Drawer.Handle />
            <div className="mx-auto max-w-md space-y-8">
              <Drawer.Title>Custom Trigger Drawer</Drawer.Title>
              <div>
                <p className="mb-2 text-gray-600">
                  This example shows a drawer with a custom trigger button.
                </p>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const VaulExample: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <div className="flex-1 rounded-t-3xl bg-light p-4">
            <Drawer.Handle />
            <div className="mx-auto max-w-md space-y-8">
              <Drawer.Title>Drawer for React.</Drawer.Title>
              <div>
                <p className="mb-2 text-gray-600">
                  This component can be used as a Dialog replacement on mobile
                  and tablet devices. You can read about why and how it was
                  built{" "}
                  <a
                    target="_blank"
                    className="underline"
                    href="https://emilkowal.ski/ui/building-a-drawer-component"
                  >
                    here
                  </a>
                  .
                </p>
                <p className="mb-2 text-gray-600">
                  This one specifically is the most simplest setup you can have,
                  just a simple drawer with a trigger.
                </p>
              </div>

              <div className="mt-4 border-t border-gray-200 bg-gray-100 p-4">
                <div className="flex justify-end gap-6">
                  <a
                    className="gap-0.25 flex items-center text-xs text-gray-600"
                    href="https://github.com/emilkowalski/vaul"
                    target="_blank"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="ml-1 h-3 w-3"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="gap-0.25 flex items-center text-xs text-gray-600"
                    href="https://twitter.com/emilkowalski_"
                    target="_blank"
                  >
                    Twitter
                    <svg
                      fill="none"
                      height="16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                      aria-hidden="true"
                      className="ml-1 h-3 w-3"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
