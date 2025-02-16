import { Add } from "@mui/icons-material";
import { Button } from "../Button";

export const Questions = () => {
  return (
    <section className="space-y-6">
      <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
        Questions
      </h2>
      <article></article>
      <Button
        theme="extra"
        rounded
        className="w-full items-center flex gap-2 justify-center"
      >
        <Add className="!w-5 !h-5" />
        <span className="font-medium">Add new question</span>
      </Button>
    </section>
  );
};
