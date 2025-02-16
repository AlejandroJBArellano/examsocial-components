import { Add } from "@mui/icons-material";
import { useRef } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewQuestion } from "../NewQuestion";

export const Questions = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Questions
      </h2>
      <article className=""></article>
      <Button
        onClick={() => {
          dialogRef.current?.showModal();
        }}
        theme="extra"
        rounded
        className="w-full items-center flex gap-2 justify-center"
      >
        <Add className="!w-5 !h-5" />
        <span className="font-medium">Add new question</span>
      </Button>
      <Dialog innerRef={dialogRef}>
        <NewQuestion
          onSubmit={() => {}}
          onCancel={() => {
            dialogRef.current?.close();
          }}
        />
      </Dialog>
    </section>
  );
};
