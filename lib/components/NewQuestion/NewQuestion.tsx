import { Add } from "@mui/icons-material";
import { Button } from "../Button";
import { CreateAnswer } from "../CreateAnswer";
import { Input } from "../Input";
import { Separator } from "../Separator";

const NewQuestion = () => {
  return (
    <div className="p-4 shadow-right shadow-black border border-black rounded-lg space-y-6">
      <h2 className="text-2xl leading-7 sentient">New Question</h2>
      <section className="space-y-4">
        <article className="space-y-1">
          <label className="font-medium">Question</label>
          <Input placeholder="Type your question here..." className="w-full" />
        </article>
        <Separator />
        <article className="space-y-3">
          <label className="font-medium">Answers</label>
          <CreateAnswer
            answer={{
              text: "",
              correct: false,
            }}
            name="answers"
            onDelete={() => {}}
            setFieldValue={() => {}}
          />
        </article>
        <Button
          theme="light"
          rounded
          className="p-2 mx-auto flex items-center justify-center"
        >
          <Add className="!w-5 !h-5" />
        </Button>
      </section>
    </div>
  );
};

export default NewQuestion;
