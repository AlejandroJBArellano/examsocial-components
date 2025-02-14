import { Delete, Edit } from "@mui/icons-material";
import { Button } from "../Button";

interface IFeedbackScreen {
  title: string;
  description: string;
}

const FeedbackScreen = ({ title, description }: IFeedbackScreen) => {
  return (
    <div className="p-4 space-y-4 border border-black rounded-md">
      <h4 className="font-medium leading-5 text-base">{title}</h4>
      <p className="font-light">{description}</p>
      <div className="flex items-center justify-between">
        <Button theme="feedback-error" rounded className="p-2">
          <Delete className="w-10 h-10" />
        </Button>
        <Button theme="light" rounded className="p-2">
          <Edit className="w-10 h-10" />
        </Button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
