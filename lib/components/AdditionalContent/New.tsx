import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

export const NewAdditionalContent = () => {
  return (
    <section className="p-4 shadow-right shadow-black border border-black space-y-6">
      <h4 className="text-2xl leading-7 font-medium tracking-[0.48px]">
        New Content
      </h4>
      <article className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="">YouTube URL</label>
          <Input placeholder="https://youtu.be/?w=video" className="w-full" />
        </div>
        <div className="space-y-1">
          <label htmlFor="">Description</label>
          <Textarea
            className="w-full"
            placeholder="Add a description to your content. This will be shown to your students."
          />
        </div>
      </article>
      <article className="flex justify-between items-center">
        <Button theme="light" rounded>
          Cancel
        </Button>
        <Button theme="accent" rounded>
          Save
        </Button>
      </article>
    </section>
  );
};
