import { Add } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { NewAdditionalContent } from "../AdditionalContent/New";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

export const AdditionalContent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Additional Content
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
        <span className="font-medium">Add new section</span>
      </Button>
      <Dialog
        innerRef={dialogRef}
        id="additional-content"
        className="max-w-sm w-full"
      >
        <NewAdditionalContent
          onSubmit={(values) => {
            console.log(values);
            formik.setFieldValue("contents", [
              ...(formik.values.contents || []),
              values,
            ]);
            dialogRef.current?.close();
          }}
          onCancel={() => {
            dialogRef.current?.close();
          }}
        />
      </Dialog>
    </section>
  );
};
