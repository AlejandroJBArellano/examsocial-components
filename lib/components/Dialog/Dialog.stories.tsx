import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Dialog } from ".";
import { Button } from "../Button";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dialog is a modal component that displays content in a layer above the page. It's typically used for important information that requires user attention or interaction.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogExample = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => dialogRef.current?.showModal()}>
        Open Dialog
      </Button>
      <Dialog innerRef={dialogRef} className="w-full max-w-md p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Dialog Title</h2>
          <p className="text-gray-600">
            This is a basic dialog with a title and some content. Dialogs are
            used to show important information that requires user attention.
          </p>
          <div className="flex justify-end gap-2">
            <Button theme="light" onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
            <Button theme="primary" onClick={() => dialogRef.current?.close()}>
              Confirm
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: () => <DialogExample />,
};

const LargeDialogExample = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => dialogRef.current?.showModal()}>
        Open Large Dialog
      </Button>
      <Dialog innerRef={dialogRef} className="w-full max-w-2xl p-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Large Dialog</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              This is a larger dialog with more content. It's useful for
              displaying forms, detailed information, or complex interactions.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex justify-end gap-3">
            <Button theme="light" onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
            <Button theme="primary" onClick={() => dialogRef.current?.close()}>
              Save Changes
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const Large: Story = {
  render: () => <LargeDialogExample />,
};

const CustomDialogExample = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => dialogRef.current?.showModal()}>
        Open Custom Dialog
      </Button>
      <Dialog
        innerRef={dialogRef}
        className="w-full max-w-lg overflow-hidden p-0"
      >
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Custom Styled Dialog</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600">
            This dialog demonstrates custom styling possibilities. You can
            customize the header, content area, and add any other UI elements as
            needed.
          </p>
          <div className="mt-6 flex justify-end gap-2">
            <Button theme="light" onClick={() => dialogRef.current?.close()}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const CustomStyled: Story = {
  render: () => <CustomDialogExample />,
};
