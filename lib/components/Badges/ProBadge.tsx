import { cn } from "@/utils";
import { Icon } from "../Icon";

const ProBadge = ({ size = "small" }: { size?: "big" | "small" }) => {
  const dimensions = {
    small: {
      container: "px-2 py-1",
      text: "text-xs font-bold xl:text-sm xl:leading:4",
    },
    big: {
      container: "px-5 py-3",
      text: "text-base leading-5 font-medium xl:text-lg xl:leading-6",
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
        grade={200}
        filled
        variant="rounded"
        name="workspace_premium"
        size={size === "big" ? 24 : 20}
      />
    </div>
  );
};

export default ProBadge;
