import { Button } from "../Button";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

interface INewAdditionalContent {
  onSubmit: (values: { youtubeUrl: string; description: string }) => void;
  onCancel: () => void;
}

export const NewAdditionalContent = ({
  onSubmit,
  onCancel,
}: INewAdditionalContent) => {
  return (
    <section className="p-4 shadow-right rounded-lg shadow-black border border-black space-y-6">
      <Heading4>New Content</Heading4>
      <article className="space-y-4">
        <div className="space-y-1">
          <FocusSpan>YouTube URL</FocusSpan>
          <Input placeholder="https://youtu.be/?w=video" className="w-full" />
        </div>
        <div className="space-y-1">
          <FocusSpan>Description</FocusSpan>
          <Textarea
            rows={4}
            className="w-full"
            placeholder="Add a description to your content. This will be shown to your students."
          />
        </div>
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
