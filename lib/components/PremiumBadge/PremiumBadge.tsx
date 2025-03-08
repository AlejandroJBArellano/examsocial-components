import { cn } from "../../utils";
import { Icon } from "../Icon";

const PremiumBadge = ({ size = "small" }: { size?: "big" | "small" }) => {
  const dimensions = {
    small: {
      container: "px-2 py-1",
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
      className={
        "inline-flex cursor-pointer select-none items-center gap-1 rounded-md bg-secondary-shadow text-secondary-tint hover:shadow-right-sm hover:shadow-secondary " +
        dimensions[size].container
      }
    >
      <span className={cn("", dimensions[size].text)}>Get With Pro</span>
      <Icon
        name="workspace_premium"
        className={cn("!h-4 !w-4", dimensions[size].icon)}
      />
    </div>
  );
};

export default PremiumBadge;
