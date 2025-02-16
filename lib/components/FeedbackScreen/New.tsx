import { Button } from "../Button";

const NewFeedbackScreen = () => {
  return (
    <div className="p-4 border shadow-right-sm shadow-black border-black space-y-6">
      <h4 className="text-2xl leading-7 tracking-[0.48px] font-medium">
        Thank You Screen
      </h4>
      <div className="flex justify-between items-center">
        <Button rounded>Cancel</Button>
        <Button theme="accent" rounded>
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewFeedbackScreen;
