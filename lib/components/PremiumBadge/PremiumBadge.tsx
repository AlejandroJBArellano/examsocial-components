import { WorkspacePremium } from "@mui/icons-material";
import { cn } from "../../utils";

const PremiumBadge = ({ size }: { size: "big" | "small" }) => {
  const dimensions = {
    small: {
      container: "",
      text: "text-xs font-bold xl:text-sm xl:leading:4",
      icon: "!w-4 !h-4 xl:!w-6 xl:!h-6",
    },
    big: {
      container: "",
      text: "",
      icon: "",
    },
  };
  return (
    <div
      className={cn(
        "px-2 py-1 items-center rounded-md flex gap-1 text-secondary-tint hover:shadow-right-sm hover:shadow-secondary bg-secondary-shadow",
        dimensions[size].container
      )}
    >
      <span className={cn("", dimensions[size].text)}>Get With Pro</span>
      <WorkspacePremium className={cn("!w-4 !h-4", dimensions[size].icon)} />
    </div>
  );
};

export default PremiumBadge;
