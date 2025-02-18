import { Add } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { NewQuestion } from "../NewQuestion";
import { QuestionSet } from "../QuestionSet";

export const Questions = () => {
  const { values, setFieldValue } =
    useFormikContext<Yup.InferType<typeof examSchema>>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Questions
      </h2>
      <article className="">
        {values.questions?.map((question, index) => (
          <QuestionSet
            {...question}
            index={index}
            key={index}
            onDelete={() => {
              setFieldValue(
                "questions",
                values.questions?.filter((_, i) => i !== index),
              );
            }}
            onEdit={() => {
              setFieldValue(
                "questions",
                values.questions?.map((q, i) =>
                  i === index ? { ...q, question: "edited" } : q,
                ),
              );
            }}
          />
        ))}
      </article>
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
          onSubmit={(newQuestion) => {
            setFieldValue("questions", [
              ...(values.questions || []),
              newQuestion,
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
