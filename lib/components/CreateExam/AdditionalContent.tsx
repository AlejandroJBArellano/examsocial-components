import { Add, DragIndicator } from "@mui/icons-material";
import { useFormikContext } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { contentSchema, examSchema } from "../../schemas";
import { NewAdditionalContent } from "../AdditionalContent/New";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { Anchor, Heading3 } from "../FontFaces";

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
    TEXT: <p className="break-all">{content.text}</p>,
    LINK: (
      <Anchor
        href={content.link}
        target="_blank"
        rel="noreferrer"
        className="break-all"
      >
        {content.link}
      </Anchor>
    ),
    IMAGE: content.image ? (
      <img
        src={content.image ? URL.createObjectURL(content.image as Blob) : ""}
        alt="content"
        className="aspect-video h-40 rounded-lg"
      />
    ) : null,
    VIDEO: content.video ? (
      <video
        src={content.video ? URL.createObjectURL(content.video as Blob) : ""}
        className="aspect-video h-40 rounded-lg"
        controls
      ></video>
    ) : null,
    AUDIO: content.audio ? (
      <audio
        src={content.audio ? URL.createObjectURL(content.audio as Blob) : ""}
        className="w-full rounded-lg"
        controls
      ></audio>
    ) : null,
    FILE: content.file ? (
      <Anchor
        href={content.file ? URL.createObjectURL(content.file as Blob) : ""}
        target="_blank"
        rel="noreferrer"
      >
        {(content.file as File).name}
      </Anchor>
    ) : null,
  };
  return (
    <section className="flex justify-between gap-4">
      {handleContent[content.contentType]}
      <DragIndicator className="!w-5 !h-5 cursor-move" />
    </section>
  );
};

export const AdditionalContent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-6">
      <Heading3>Additional Content</Heading3>
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
