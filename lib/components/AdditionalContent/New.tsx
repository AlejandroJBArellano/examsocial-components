import { useEffect, useState } from "react";
import { ContentTypes } from "../../types";
import { Button } from "../Button";
import { Field } from "../Field";
import { FocusSpan, Heading4 } from "../FontFaces";
import { ImageField } from "../ImageField";
import { Select } from "../Select";

interface INewAdditionalContent {
  onSubmit: (values: {
    type: ContentTypes;
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
  const [type, setContentType] = useState<ContentTypes>("YOUTUBE");
  const [container, setContainer] = useState<HTMLElement>();
  const [youtubeUrl, setYoutubeUrl] = useState<string>();
  const [text, setText] = useState<string>();
  const [link, setLink] = useState<string>();
  const [image, setImage] = useState<File | null>(null);
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
      <Field
        label="YouTube URL"
        inputProps={{
          placeholder: "https://youtu.be/?w=video",
          className: "w-full",
          onChange: (e) => {
            setYoutubeUrl(e.target.value);
          },
          value: youtubeUrl,
        }}
      />
    ),
    TEXT: (
      <Field.Textarea
        label="Text"
        textareaProps={{
          rows: 4,
          className: "w-full",
          placeholder:
            "Add a description to your content. This will be shown to your students.",
          onChange: (e) => {
            setText(e.target.value);
          },
          value: text,
        }}
      />
    ),
    LINK: (
      <Field
        label="Link"
        inputProps={{
          placeholder: "https://example.com",
          className: "w-full",
          onChange: (e) => {
            setLink(e.target.value);
          },
          value: link,
        }}
      />
    ),
    IMAGE: (
      <ImageField image={image} setImage={(newImage) => setImage(newImage)} />
    ),
    VIDEO: (
      <div className="space-y-1">
        <FocusSpan>Video</FocusSpan>
        <input
          type="file"
          accept="video/*"
          className="w-full file:rounded-full file:border-primary-shadow file:bg-primary file:p-2 file:text-primary-shadow file:hover:bg-primary-shadow file:hover:text-primary-tint"
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
          accept="audio/*"
          className="w-full file:rounded-full file:border-primary-shadow file:bg-primary file:p-2 file:text-primary-shadow file:hover:bg-primary-shadow file:hover:text-primary-tint"
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
          className="w-full file:rounded-full file:border-primary-shadow file:bg-primary file:p-2 file:text-primary-shadow file:hover:bg-primary-shadow file:hover:text-primary-tint"
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
    <section className="bg-light space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
      <Heading4>New Content</Heading4>
      <article className="space-y-1">
        <FocusSpan>Content Type</FocusSpan>
        <Select
          text={type ? ContentTypeNamesMap[type] : "Select content type"}
          container={container}
        >
          <Select.Option
            onClick={() => {
              setContentType("YOUTUBE");
            }}
            checked={type === "YOUTUBE"}
          >
            YouTube URL
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("LINK");
            }}
            checked={type === "LINK"}
          >
            Link
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("TEXT");
            }}
            checked={type === "TEXT"}
          >
            Text
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("IMAGE");
            }}
            checked={type === "IMAGE"}
          >
            Image
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("VIDEO");
            }}
            checked={type === "VIDEO"}
          >
            Video
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("AUDIO");
            }}
            checked={type === "AUDIO"}
          >
            Audio
          </Select.Option>
          <Select.Option
            onClick={() => {
              setContentType("FILE");
            }}
            checked={type === "FILE"}
          >
            File
          </Select.Option>
        </Select>
      </article>
      <article className="space-y-4">{type && ContentTypes[type]}</article>
      <article className="flex items-center justify-between">
        <Button theme="light" rounded onClick={onCancel}>
          Cancel
        </Button>
        <Button
          theme="accent"
          rounded
          type="button"
          onClick={() => {
            onSubmit({
              type,
              youtubeUrl: type === "YOUTUBE" ? youtubeUrl : undefined,
              text: type === "TEXT" ? text : undefined,
              link: type === "LINK" ? link : undefined,
              image: type === "IMAGE" ? image! : undefined,
              video: type === "VIDEO" ? video : undefined,
              audio: type === "AUDIO" ? audio : undefined,
              file: type === "FILE" ? file : undefined,
            });

            setContentType("YOUTUBE");
            setYoutubeUrl("");
            setText("");
            setLink("");
            setImage(null);
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
