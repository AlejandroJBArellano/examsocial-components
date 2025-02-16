import { Add } from "@mui/icons-material";
import { useRef } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewFeedbackScreen } from "../FeedbackScreen";

export const AdvancedSettings = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-4">
      <h2 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        Advanced Settings
      </h2>
      <article className="space-y-1">
        <label className="font-medium leading-5 block">
          Personalized Thank You Screen
        </label>
        <Button
          className="p-2"
          rounded
          onClick={() => dialogRef.current?.showModal()}
        >
          <Add className="!w-8 !h-8" />
        </Button>
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
