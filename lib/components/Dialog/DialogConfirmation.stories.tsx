import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useRef, useState } from "react";
import { Dialog } from ".";
import { Button } from "../Button";
import { Field } from "../Field";
import { Icon } from "../Icon";
import { Select } from "../Select";
import { Separator } from "../Separator";
import { Tag } from "../Tag";
import { Textarea } from "../Textarea";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog/Compositions/Confirmation",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Confirmation dialog composition with safeguards, validation, select controls, and contextual actions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const ConfirmationWithSafeguardsStory = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [deleteText, setDeleteText] = useState("");
  const [deleteWindow, setDeleteWindow] = useState("Immediately");
  const [reason, setReason] = useState("");
  const [createBackup, setCreateBackup] = useState(true);

  const canDelete =
    deleteText.trim().toUpperCase() === "DELETE" && reason.trim().length >= 10;

  const closeAndReset = () => {
    dialogRef.current?.close();
    setDeleteText("");
    setDeleteWindow("Immediately");
    setReason("");
    setCreateBackup(true);
  };

  return (
    <>
      <Button theme="accent" onClick={() => dialogRef.current?.showModal()}>
        Open Confirmation Dialog
      </Button>

      <Dialog innerRef={dialogRef} className="w-full max-w-2xl p-0">
        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Delete exam permanently</h2>
            <Tag theme="feedback-error">Irreversible action</Tag>
          </div>

          <p className="text-sm text-gray-700">
            This action removes the exam, attempts, and analytics. Complete the
            checks below before confirming.
          </p>

          <Separator>Safety checks</Separator>

          <Field
            label="Type DELETE to continue"
            error={
              deleteText && deleteText.trim().toUpperCase() !== "DELETE"
                ? "The phrase must match exactly."
                : undefined
            }
            inputProps={{
              placeholder: "DELETE",
              value: deleteText,
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setDeleteText(event.target.value),
              RightIcon: <Icon name="warning" size={20} />,
            }}
          />

          <div className="space-y-1">
            <p className="text-sm font-medium">Deletion window</p>
            <Select text={deleteWindow}>
              <Select.Option
                checked={deleteWindow === "Immediately"}
                onCheckedChange={() => setDeleteWindow("Immediately")}
              >
                Immediately
              </Select.Option>
              <Select.Option
                checked={deleteWindow === "In 24 hours"}
                onCheckedChange={() => setDeleteWindow("In 24 hours")}
              >
                In 24 hours
              </Select.Option>
              <Select.Option
                checked={deleteWindow === "At end of billing cycle"}
                onCheckedChange={() =>
                  setDeleteWindow("At end of billing cycle")
                }
              >
                At end of billing cycle
              </Select.Option>
            </Select>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Reason for auditing</p>
            <Textarea
              rows={3}
              value={reason}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setReason(event.target.value)
              }
              placeholder="Explain why this exam must be deleted..."
            />
            <p className="text-xs text-gray-600">Minimum 10 characters.</p>
          </div>

          <Field.Switch
            checked={createBackup}
            onCheckedChange={(checked: boolean) =>
              setCreateBackup(Boolean(checked))
            }
            helperText="Creates a read-only backup file before deletion."
          >
            Create backup snapshot
          </Field.Switch>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button.Action name="info">
              Deleting an exam cannot be undone. Backups remain read-only.
            </Button.Action>

            <div className="flex items-center gap-2">
              <Button theme="light" onClick={closeAndReset}>
                Cancel
              </Button>
              <Button
                theme="feedback-error"
                disabled={!canDelete}
                onClick={closeAndReset}
              >
                Delete exam
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const ConfirmationWithSafeguards: Story = {
  render: () => <ConfirmationWithSafeguardsStory />,
};
