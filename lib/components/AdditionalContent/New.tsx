import { useEffect, useState } from "react";
import { BannerInput } from "../BannerInput";
import { Button } from "../Button";
import { FocusSpan, Heading4 } from "../FontFaces";
import { ImageField } from "../ImageField";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

interface INewAdditionalContent {
  onSubmit: (values: { youtubeUrl: string; description: string }) => void;
  onCancel: () => void;
}

type ContentTypes =
  | "YOUTUBE"
  | "TEXT"
  | "LINK"
  | "IMAGE"
  | "VIDEO"
  | "AUDIO"
  | "FILE";

const ContentTypeNamesMap = {
  YOUTUBE: "YouTube URL",
  TEXT: "Text",
  LINK: "Link",
  IMAGE: "Image",
  VIDEO: "Video",
  AUDIO: "Audio",
  FILE: "File",
};

export const NewAdditionalContent = ({
  onSubmit,
  onCancel,
}: INewAdditionalContent) => {
  const [contentType, setContentType] = useState<ContentTypes>();
  const [container, setContainer] = useState<HTMLElement>();
  const [image, setImage] = useState<File>();
  const [video, setVideo] = useState<File>();
  const [audio, setAudio] = useState<File>();
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const containerDOM = document.getElementById("additional-content");
    if (containerDOM) {
      setContainer(containerDOM);
    }
  }, []);

  const ContentTypes = {
    YOUTUBE: (
      <div className="space-y-1">
        <FocusSpan>YouTube URL</FocusSpan>
        <Input placeholder="https://youtu.be/?w=video" className="w-full" />
      </div>
    ),
    TEXT: (
      <div className="space-y-1">
        <FocusSpan>Text</FocusSpan>
        <Textarea
          rows={4}
          className="w-full"
          placeholder="Add a description to your content. This will be shown to your students."
        />
      </div>
    ),
    LINK: (
      <div className="space-y-1">
        <FocusSpan>Link</FocusSpan>
        <Input placeholder="https://example.com" className="w-full" />
      </div>
    ),
    IMAGE: <ImageField image={image} setImage={setImage} />,
    VIDEO: (
      <div className="space-y-1">
        <FocusSpan>Video</FocusSpan>
        <BannerInput
          onChange={(e) => {
            const file = e.target?.files?.[0];
            if (file) {
              setVideo(file);
            }
          }}
        />
      </div>
    ),
    AUDIO: (
      <div className="space-y-1">
        <FocusSpan>Audio</FocusSpan>
        <BannerInput
          onChange={(e) => {
            const file = e.target?.files?.[0];
            if (file) {
              setAudio(file);
            }
          }}
        />
      </div>
    ),
    FILE: (
      <div className="space-y-1">
        <FocusSpan>File</FocusSpan>
        <BannerInput
          onChange={(e) => {
            const file = e.target?.files?.[0];
            if (file) {
              setFile(file);
            }
          }}
        />
      </div>
    ),
  };

  return (
    <section className="p-4 shadow-right rounded-lg shadow-black border border-black space-y-6">
      <Heading4>New Content</Heading4>
      <article className="space-y-1">
        <FocusSpan>Content Type</FocusSpan>
        <Select
          text={
            contentType
              ? ContentTypeNamesMap[contentType]
              : "Select content type"
          }
          container={container}
        >
          <Select.Option
            onClick={() => {
              setContentType("YOUTUBE");
            }}
            checked={contentType === "YOUTUBE"}
          >
            YouTube URL
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("LINK");
            }}
            checked={contentType === "LINK"}
          >
            Link
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("TEXT");
            }}
            checked={contentType === "TEXT"}
          >
            Text
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("IMAGE");
            }}
            checked={contentType === "IMAGE"}
          >
            Image
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("VIDEO");
            }}
            checked={contentType === "VIDEO"}
          >
            Video
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("AUDIO");
            }}
            checked={contentType === "AUDIO"}
          >
            Audio
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("FILE");
            }}
            checked={contentType === "FILE"}
          >
            File
          </Select.Option>
        </Select>
      </article>
      <article className="space-y-4">
        {contentType && ContentTypes[contentType]}
      </article>
      <article className="flex justify-between items-center">
        <Button theme="light" rounded onClick={onCancel}>
          Cancel
        </Button>
        <Button
          theme="accent"
          rounded
          onClick={() => onSubmit({ youtubeUrl: "", description: "" })}
        >
          Save
        </Button>
      </article>
    </section>
  );
};
