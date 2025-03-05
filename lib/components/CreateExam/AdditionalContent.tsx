import { Add } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { contentSchema, examSchema } from "../../schemas";
import { NewAdditionalContent } from "../AdditionalContent/New";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

const ContentSet = ({
  content,
}: {
  content: Yup.InferType<typeof contentSchema>;
}) => {
  const handleContent = {
    YOUTUBE: (
      <iframe
        src={content.youtubeUrl}
        className="w-full h-[200px] rounded-lg"
        allowFullScreen
        width={560}
        height={315}
      ></iframe>
    ),
    TEXT: <p>{content.text}</p>,
    LINK: (
      <a href={content.link} target="_blank" rel="noreferrer">
        {content.link}
      </a>
    ),
    IMAGE: content.image ? (
      <img
        src={content.image ? URL.createObjectURL(content.image as Blob) : ""}
        alt="content"
        className="w-full h-[200px] rounded-lg"
      />
    ) : null,
    VIDEO: content.video ? (
      <video
        src={content.video ? URL.createObjectURL(content.video as Blob) : ""}
        className="w-full h-[200px] rounded-lg"
        controls
      ></video>
    ) : null,
    AUDIO: content.audio ? (
      <audio
        src={content.audio ? URL.createObjectURL(content.audio as Blob) : ""}
        className="w-full h-[200px] rounded-lg"
        controls
      ></audio>
    ) : null,
    FILE: content.file ? (
      <a
        href={content.file ? URL.createObjectURL(content.file as Blob) : ""}
        target="_blank"
        rel="noreferrer"
      >
        {(content.file as File).name}
      </a>
    ) : null,
  };
  return <div>{handleContent[content.contentType]}</div>;
};

export const AdditionalContent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Additional Content
      </h2>
      <article className="space-y-4">
        {formik.values.contents.map((content, index) => (
          <ContentSet key={index} content={content} />
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
