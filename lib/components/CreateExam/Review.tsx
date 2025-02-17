import { Visibility } from "@mui/icons-material";
import { Button } from "../Button";

export const Review = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="sentient font-bold text-[28px] leading-8 tracking-[0.56px]">
          Review
        </h2>
        <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Visibility className="!w-5 !h-5" />
          <span className="font-medium">Preview exam</span>
        </Button>
      </div>
      <h3 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        General Details
      </h3>
      <h3 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        Questions
      </h3>
      <h3 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        Additional Content
      </h3>
      <h3 className="sentient font-medium text-2xl leading-7 tracking-[0.48px]">
        Advanced Settings
      </h3>
    </div>
  );
};
