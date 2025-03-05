import { useEffect, useState } from "react";
import { ContentTypes } from "../../types";
import { Button } from "../Button";
import { FocusSpan, Heading4 } from "../FontFaces";
import { ImageField } from "../ImageField";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

interface INewAdditionalContent {
  onSubmit: (values: {
    contentType: ContentTypes;
    youtubeUrl?: string;
    text?: string;
    link?: string;
    image?: File;
    video?: File;
    audio?: File;
    file?: File;
  }) => void;
  onCancel: () => void;
}

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
  const [contentType, setContentType] = useState<ContentTypes>("YOUTUBE");
  const [container, setContainer] = useState<HTMLElement>();
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [text, setText] = useState<string>();
  const [link, setLink] = useState<string>();
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
        <Input
          placeholder="https://youtu.be/?w=video"
          className="w-full"
          onChange={(e) => {
            setYoutubeUrl(e.target.value);
          }}
          value={youtubeUrl}
        />
      </div>
    ),
    TEXT: (
      <div className="space-y-1">
        <FocusSpan>Text</FocusSpan>
        <Textarea
          rows={4}
          className="w-full"
          placeholder="Add a description to your content. This will be shown to your students."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </div>
    ),
    LINK: (
      <div className="space-y-1">
        <FocusSpan>Link</FocusSpan>
        <Input
          placeholder="https://example.com"
          className="w-full"
          onChange={(e) => {
            setLink(e.target.value);
          }}
          value={link}
        />
      </div>
    ),
    IMAGE: (
      <ImageField
        image={image}
        setImage={(image) => image && setImage(image)}
      />
    ),
    VIDEO: (
      <div className="space-y-1">
        <FocusSpan>Video</FocusSpan>
        <input
          type="file"
          accept="video/*"
          className="w-full file:rounded-full file:bg-primary file:p-2 file:hover:bg-primary-shadow file:hover:text-primary-tint file:border-primary-shadow file:text-primary-shadow"
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
        <input
          type="file"
          accept="video/*"
          className="w-full file:rounded-full file:bg-primary file:p-2 file:hover:bg-primary-shadow file:hover:text-primary-tint file:border-primary-shadow file:text-primary-shadow"
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
        <input
          type="file"
          accept="video/*"
          className="w-full file:rounded-full file:bg-primary file:p-2 file:hover:bg-primary-shadow file:hover:text-primary-tint file:border-primary-shadow file:text-primary-shadow"
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
          type="button"
          onClick={() => {
            onSubmit({
              contentType,
              youtubeUrl: contentType === "YOUTUBE" ? youtubeUrl : undefined,
              text: contentType === "TEXT" ? text : undefined,
              link: contentType === "LINK" ? link : undefined,
              image: contentType === "IMAGE" ? image : undefined,
              video: contentType === "VIDEO" ? video : undefined,
              audio: contentType === "AUDIO" ? audio : undefined,
              file: contentType === "FILE" ? file : undefined,
            });

            setContentType("YOUTUBE");
            setYoutubeUrl("");
            setText("");
            setLink("");
            setImage(undefined);
            setVideo(undefined);
            setAudio(undefined);
            setFile(undefined);
          }}
        >
          Save
        </Button>
      </article>
    </section>
  );
};
