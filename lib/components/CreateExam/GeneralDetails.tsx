import { BannerInput, Input, Textarea } from "examsocial-components";

export const GeneralDetails = () => {
  return (
    <section className="space-y-4">
      <h2 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        General Details
      </h2>
      <article className="space-y-1">
        <label htmlFor="">Banner</label>
        <BannerInput />
      </article>
      <article className="space-y-1">
        <label htmlFor="">Name</label>
        <Input
          name="title"
          placeholder="The name of your exam"
          className="w-full"
        />
      </article>
      <article className="space-y-1">
        <label htmlFor="">Description</label>
        <Textarea
          name="description"
          placeholder="A brief description of your exam"
          className="w-full"
        />
      </article>
    </section>
  );
};
