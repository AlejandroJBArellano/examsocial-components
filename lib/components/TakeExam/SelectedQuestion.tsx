import { ArrowForward } from "@mui/icons-material";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { FocusSpan, Heading3, Heading6 } from "../FontFaces";

const SelectedQuestion = () => {
  return (
    <section className="py-6 px-4 space-y-4 h-full">
      <article className="flex flex-col gap-5">
        <div className="space-y-1">
          <Heading6>Question 1</Heading6>
          <Heading3>What is the capital of Nigeria?</Heading3>
        </div>
        <div className="flex flex-auto gap-2 flex-col">
          <AnswerOption>Abuja</AnswerOption>
          <AnswerOption>Abuja</AnswerOption>
          <AnswerOption>Abuja</AnswerOption>
          <AnswerOption>Abuja</AnswerOption>
          <AnswerOption>Abuja</AnswerOption>
        </div>
      </article>
      <article className="flex justify-between">
        <Button theme="light" rounded>
          <FocusSpan>Previous</FocusSpan>
        </Button>
        <Button
          rounded
          theme="accent"
          className="flex items-center justify-center gap-2"
        >
          <ArrowForward />
          <FocusSpan>Next</FocusSpan>
        </Button>
      </article>
    </section>
  );
};

export default SelectedQuestion;
