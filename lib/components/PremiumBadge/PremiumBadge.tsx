import { WorkspacePremium } from "@mui/icons-material";
import { cn } from "../../utils";

const PremiumBadge = ({ size }: { size: "big" | "small" }) => {
  const dimensions = {
    small: {
      container: "px-2 py-1 ",
      text: "text-xs font-bold xl:text-sm xl:leading:4",
      icon: "!w-4 !h-4 xl:!w-6 xl:!h-6",
    },
    big: {
      container: "px-5 py-3",
      text: "text-base leading-5 font-medium xl:text-lg xl:leading-6",
      icon: "!w-4 !h-4 xl:!w-6 xl:!h-6",
    },
  };
  return (
    <div
      className={cn(
        "items-center rounded-md inline-flex gap-1 text-secondary-tint hover:shadow-right-sm hover:shadow-secondary bg-secondary-shadow",
        dimensions[size].container
      )}
    >
      <span className={cn("", dimensions[size].text)}>Get With Pro</span>
      <WorkspacePremium className={cn("!w-4 !h-4", dimensions[size].icon)} />
    </div>
  );
};

export default PremiumBadge;
