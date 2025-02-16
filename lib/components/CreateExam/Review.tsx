import { Visibility } from "@mui/icons-material";
import { Button } from "../Button";

export const Review = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="text-2xl leading-7 font-medium tracking-[0.48px]">
          Review
        </h4>
        <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Visibility className="!w-5 !h-5" />
          <span className="font-medium">Preview exam</span>
        </Button>
      </div>
    </div>
  );
};
