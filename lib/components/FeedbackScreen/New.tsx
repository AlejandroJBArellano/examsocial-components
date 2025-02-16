import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

const FeedbackCondition = {
  ALL: "All",
  BETWEEN: "Between",
  EQUAL_TO: "Equal to",
  GREATER_THAN: "Greater than",
  LESS_THAN: "Less than",
};

const FeedbackConditionField = () => {
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
        <label>Condition</label>
        <Select text="Select One" container={container}>
          <Select.Option>All</Select.Option>
          <Select.Option>Between</Select.Option>
          <Select.Option>Equal to</Select.Option>
          <Select.Option>Greater than</Select.Option>
        </Select>
      </div>
      <div></div>
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
