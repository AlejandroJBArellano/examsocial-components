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
        <article>
          <label className="font-medium">Question</label>
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
      </section>
    </div>
  );
};

export default NewQuestion;
