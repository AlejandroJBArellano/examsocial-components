import { Add } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { EditQuestion } from "../EditQuestion";
import { NewQuestion } from "../NewQuestion";
import { QuestionSet } from "../QuestionSet";

export const Questions = () => {
  const [index, setIndex] = useState<number | null>(null);
  const { values, setFieldValue } =
    useFormikContext<Yup.InferType<typeof examSchema>>();
  const editDialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (index !== null) {
      editDialogRef.current?.showModal();
    }
  }, [index]);

  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Questions
      </h2>
      <article className="space-y-4">
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
              setIndex(index);
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
      <Dialog innerRef={editDialogRef}>
        <EditQuestion
          initialValues={
            values.questions && index
              ? values.questions[index]
              : {
                  question: "",
                  answers: [],
                }
          }
          onSubmit={(updatedQuestion) => {
            setFieldValue(
              "questions",
              values.questions?.map((question, i) => {
                if (i === index) {
                  return updatedQuestion;
                }
                return question;
              }),
            );
            editDialogRef.current?.close();
            setIndex(null);
          }}
          onCancel={() => {
            editDialogRef.current?.close();
            setIndex(null);
          }}
        />
      </Dialog>
    </section>
  );
};
