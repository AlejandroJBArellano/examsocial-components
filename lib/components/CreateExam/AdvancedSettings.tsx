import { Add } from "@mui/icons-material";
import { useRef } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewFeedbackScreen } from "../FeedbackScreen";
import { Input } from "../Input";
import { PremiumBadge } from "../PremiumBadge";
import { Select } from "../Select";
import { Switch } from "../Switch";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-4 [&>article]:space-y-1 [&>article]:flex [&>article]:items-center [&>article]:justify-between [&>article>label]:leading-5 [&>article>label]:font-medium">
      <div className="flex items-center justify-between">
        <h2 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
          Advanced Settings
        </h2>
        <PremiumBadge />
      </div>
      <article className="flex-col !items-start">
        <label>Personalized Thank You Screen</label>
        <Button
          className="p-2"
          rounded
          onClick={() => dialogRef.current?.showModal()}
        >
          <Add className="!w-8 !h-8" />
        </Button>
      </article>
      <article>
        <label>Randomize question order</label>
        <Switch className="w-20" />
      </article>
      <article>
        <label>Show correct answers at the end</label>
        <Switch className="w-20" />
      </article>
      <article className="w-full">
        <label>Number of attempts</label>
        <Input
          type="number"
          containerClassName="flex-initial"
          className="w-20"
        />
      </article>
      <article className="!grid grid-cols-2 items-center">
        <label>Theme</label>
        <Select text="Whiteboard">
          <Select.Option>Light</Select.Option>
          <Select.Option>Dark</Select.Option>
        </Select>
      </article>
      <Dialog innerRef={dialogRef} id="advanced-settings">
        <NewFeedbackScreen
          onSubmit={() => {}}
          onCancel={() => {
            dialogRef.current?.close();
          }}
        />
      </Dialog>
    </section>
  );
};
