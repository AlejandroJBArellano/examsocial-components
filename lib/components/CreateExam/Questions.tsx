import { examSchema } from "@/schemas";
import { useFormikContext } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { EditQuestion } from "../EditQuestion";
import { Heading3, Paragraph, Span } from "../FontFaces";
import { Icon } from "../Icon";
import { NewQuestion } from "../NewQuestion";
import { QuestionSet } from "../QuestionSet";

export const Questions = () => {
  const [index, setIndex] = useState<number | null>(null);
  const { values, setFieldValue, errors } =
    useFormikContext<Yup.InferType<typeof examSchema>>();
  const editDialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  console.log({ values });

  useEffect(() => {
    if (index !== null) {
      editDialogRef.current?.showModal();
    }
  }, [index]);

  return (
    <section className="space-y-6">
      <Heading3>Questions</Heading3>
      {errors.questions && (
        <div className="space-y-2 rounded-md border border-feedback-error bg-feedback-error-tint p-4">
          <div className="flex items-center gap-2">
            <Icon
              name="error"
              size={20}
              className="text-feedback-error"
              filled
            />
            <Span className="text-feedback-error">
              {Array.isArray(errors.questions)
                ? errors.questions.join(", ")
                : errors.questions}
            </Span>
          </div>
          {values.questions?.length === 0 && (
            <Paragraph className="text-sm text-gray-700">
              Click the "Add new question" button below to create your first
              question.
            </Paragraph>
          )}
        </div>
      )}
      {values.questions?.length > 0 && (
        <article className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {values.questions?.map((question, index) => (
            <QuestionSet
              {...question}
              index={index}
              key={index}
              image={
                question.image
                  ? URL.createObjectURL(question.image as Blob)
                  : undefined
              }
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
      )}
      <Button
        onClick={() => {
          dialogRef.current?.showModal();
        }}
        theme="extra"
        rounded
        className="flex w-full items-center justify-center gap-2 md:mx-auto md:w-auto"
      >
        <Icon name="add" className="!h-5 !w-5" />
        <span className="font-medium">Add new question</span>
      </Button>
      <Dialog innerRef={dialogRef} className="w-full max-w-sm xl:max-w-lg">
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
      <Dialog innerRef={editDialogRef} className="w-full max-w-sm xl:max-w-lg">
        {index !== null && (
          <EditQuestion
            initialValues={values.questions[index]}
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
        )}
      </Dialog>
    </section>
  );
};
