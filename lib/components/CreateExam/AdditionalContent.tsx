import { useFormikContext } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { contentSchema, examSchema } from "../../schemas";
import { NewAdditionalContent } from "../AdditionalContent/New";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { Anchor, Heading3, Paragraph, Smoll } from "../FontFaces";
import { Icon } from "../Icon";

const ContentSet = ({
  content,
}: {
  content: Yup.InferType<typeof contentSchema>;
}) => {
  const handleContent = {
    YOUTUBE: (
      <iframe
        src={content.youtubeUrl}
        className="aspect-video rounded-lg"
        allowFullScreen
        width={560}
        height={315}
      ></iframe>
    ),
    TEXT: <p className="break-all">{content.text}</p>,
    LINK: (
      <article className="flex items-center justify-between border-sm border-black bg-white p-2">
        <div className="flex items-center gap-2">
          <Icon name="link" className="!h-10 !w-10" />
          <div className="space-y-1">
            <Anchor
              href={content.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {content.link}
            </Anchor>
            <Smoll>External Link</Smoll>
          </div>
        </div>
        <Button.Icon
          type="button"
          theme="feedback-error"
          rounded
          className="flex items-center justify-center p-2"
          onClick={() => {}}
          filled
          size={24}
        >
          open_in_new
        </Button.Icon>
      </article>
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
    <section className="mx-auto flex justify-between gap-4 hover:bg-primary-tint md:justify-center md:rounded-lg md:py-6">
      <div className="max-w-xl">{handleContent[content.type]}</div>
      <Icon name="drag_indicator" className="!h-5 !w-5 cursor-move" />
    </section>
  );
};

export const AdditionalContent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-6">
      <Heading3>Additional Content</Heading3>
      <Paragraph>
        Enhance your exam with supplementary materials such as links, images,
        videos, audio files, or documents. These additional resources can
        provide context, references, or extra information to help students
        better understand the exam content.
      </Paragraph>
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
        className="flex w-full items-center justify-center gap-2 md:mx-auto md:w-auto"
      >
        <Icon name="add" className="!h-5 !w-5" />
        <span className="font-medium">Add new section</span>
      </Button>
      <Dialog
        innerRef={dialogRef}
        id="additional-content"
        className="w-full max-w-sm"
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
