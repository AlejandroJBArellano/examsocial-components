import { Add } from "@mui/icons-material";
import { useRef } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewFeedbackScreen } from "../FeedbackScreen";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Helper } from "../Helper";
import { Input } from "../Input";
import { PremiumBadge } from "../PremiumBadge";
import PrivacySettings from "../PrivacySettings/PrivacySettings";
import { Select } from "../Select";
import { Switch } from "../Switch";
import TimingSettings from "../TimingSettings/TimingSettings";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-4 [&>article]:space-y-1 [&>article]:flex [&>article]:items-center [&>article]:justify-between [&>article>div]:flex [&>article>div]:items-center [&>article>div]:gap-2">
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
        <div>
          <FocusSpan>Randomize question order</FocusSpan>
          <Helper align="center" side="top">
            Randomizing question order will shuffle the order of questions for
            each student.
          </Helper>
        </div>
        <Switch className="w-20" />
      </article>
      <article>
        <div>
          <FocusSpan>Show correct answers at the end</FocusSpan>
          <Helper align="center" side="top">
            Showing correct answers at the end will display the correct answers
            to the questions after the student has submitted the exam.
          </Helper>
        </div>
        <Switch className="w-20" />
      </article>
      <article>
        <div>
          <FocusSpan>Send email report</FocusSpan>
          <Helper align="center" side="top">
            Sending email report will send the student's exam report to their
            email.
          </Helper>
        </div>
        <Switch className="w-20" />
      </article>
      <article>
        <div>
          <FocusSpan>Leaderboard</FocusSpan>
          <Helper align="center" side="top">
            Leaderboard will display the top 10 students with the highest score
            after the exam.
          </Helper>
        </div>
        <Switch className="w-20" />
      </article>
      <article className="w-full">
        <div>
          <FocusSpan>Number of attempts</FocusSpan>
          <Helper align="center" side="top">
            Number of attempts is the number of times a student can attempt the
            exam.
          </Helper>
        </div>
        <Input
          type="number"
          placeholder="3"
          containerClassName="flex-initial"
          className="w-20"
        />
      </article>
      <TimingSettings />
      <PrivacySettings onChange={() => {}} />
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
