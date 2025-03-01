import { Add } from "@mui/icons-material";
import { useRef } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewFeedbackScreen } from "../FeedbackScreen";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Helper } from "../Helper";
import { Input } from "../Input";
import { PremiumBadge } from "../PremiumBadge";
import { Select } from "../Select";
import { Switch } from "../Switch";
import TimingSettings from "../TimingSettings/TimingSettings";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-4 [&>article]:space-y-1 [&>article]:flex [&>article]:items-center [&>article]:justify-between">
      <div className="flex items-center justify-between">
        <Heading4>Advanced Settings</Heading4>
        <PremiumBadge />
      </div>
      <article className="flex-col !items-start">
        <FocusSpan>Personalized Thank You Screen</FocusSpan>
        <Button
          className="p-2"
          rounded
          onClick={() => dialogRef.current?.showModal()}
        >
          <Add className="!w-8 !h-8" />
        </Button>
      </article>
      <article>
        <div className="flex items-center gap-2">
          <FocusSpan>Randomize question order</FocusSpan>
          <Helper align="center" side="top">
            Randomizing question order will shuffle the order of questions for
            each student.
          </Helper>
        </div>
        <Switch className="w-20" />
      </article>
      <article>
        <FocusSpan>Show correct answers at the end</FocusSpan>
        <Switch className="w-20" />
      </article>
      <article>
        <FocusSpan>Send email report</FocusSpan>
        <Switch className="w-20" />
      </article>
      <article>
        <FocusSpan>Leaderboard</FocusSpan>
        <Switch className="w-20" />
      </article>
      <TimingSettings />
      <article className="w-full">
        <FocusSpan>Number of attempts</FocusSpan>
        <Input
          type="number"
          placeholder="3"
          containerClassName="flex-initial"
          className="w-20"
        />
      </article>
      <article className="!grid grid-cols-2 items-center">
        <FocusSpan>Theme</FocusSpan>
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
