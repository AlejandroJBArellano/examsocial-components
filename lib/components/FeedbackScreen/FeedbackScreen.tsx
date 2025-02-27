import { Delete, Edit } from "@mui/icons-material";
import { Button } from "../Button";

interface IFeedbackScreen {
  title: string;
  description: string;
}

const FeedbackScreen = ({ title, description }: IFeedbackScreen) => {
  return (
    <div className="p-4 space-y-4 border border-black rounded-md xl:space-y-5 xl:p-6">
      <h4 className="font-medium leading-5 text-base xl:text-lg xl:leading-6">
        {title}
      </h4>
      <p className="font-light xl:text-lg">{description}</p>
      <div className="flex items-center justify-between">
        <Button theme="feedback-error" rounded className="p-2 xl:p-2">
          <Delete className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
        <Button theme="light" rounded className="p-2 xl:p-2">
          <Edit className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
