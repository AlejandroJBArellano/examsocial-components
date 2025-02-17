import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

const FeedbackCondition = {
  ALL: "All",
  BETWEEN: "Between",
  EQUAL_TO: "Equal to",
  GREATER_THAN: "Greater than",
  LESS_THAN: "Less than",
};

const FeedbackConditionNodes = {
  [FeedbackCondition.ALL]: null,
  [FeedbackCondition.BETWEEN]: (
    <div className="flex items-center gap-2">
      <Input placeholder="0" type="number" className="w-full h-11" />
      <span className="text-lg leading-6">and</span>
      <Input placeholder="100" type="number" className="w-full h-11" />
    </div>
  ),
  [FeedbackCondition.EQUAL_TO]: (
    <Input placeholder="100" className="w-full h-11" type="number" />
  ),
  [FeedbackCondition.GREATER_THAN]: (
    <Input placeholder="100" className="w-full h-11" type="number" />
  ),
  [FeedbackCondition.LESS_THAN]: (
    <Input placeholder="100" className="w-full h-11" type="number" />
  ),
};

const FeedbackConditionField = () => {
  const [condition, setCondition] = useState(FeedbackCondition.ALL);
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    const containerDOM = document.getElementById("advanced-settings");
    if (containerDOM) {
      setContainer(containerDOM);
    }
  }, []);

  return (
    <article className="grid grid-cols-2 gap-4 items-end">
      <div className="space-y-1">
        <label className="font-medium">Condition</label>
        <Select text={condition || "Select one"} container={container}>
          {Object.entries(FeedbackCondition).map(([key, value]) => (
            <Select.Option
              key={key}
              checked={condition === value}
              onClick={() => setCondition(value)}
            >
              {value}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>{FeedbackConditionNodes[condition]}</div>
    </article>
  );
};

interface IFeedback {
  message: string;
  condition: string;
}

interface INewFeedbackScreen {
  onSubmit: (values: IFeedback) => void;
  onCancel: () => void;
}

const NewFeedbackScreen = ({ onSubmit, onCancel }: INewFeedbackScreen) => {
  return (
    <div className="p-4 border rounded-lg shadow-right-sm shadow-black border-black space-y-6">
      <h4 className="text-2xl leading-7 tracking-[0.48px] font-medium sentient">
        Thank You Screen
      </h4>
      <section className="space-y-4">
        <article className="space-y-1">
          <label className="block font-medium leading-5">Message</label>
          <Textarea
            className="w-full p-2 border rounded-lg"
            placeholder="e.g., Congrats, you got a perfect score!"
          />
        </article>
        <FeedbackConditionField />
      </section>
      <div className="flex justify-between items-center">
        <Button rounded onClick={onCancel}>
          Cancel
        </Button>
        <Button theme="accent" rounded>
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewFeedbackScreen;
