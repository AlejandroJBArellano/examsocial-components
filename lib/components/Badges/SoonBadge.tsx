import { Icon } from "../Icon";

const SoonBadge = ({ size = "small" }: { size?: "big" | "small" }) => {
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
        "inline-flex cursor-pointer select-none items-center gap-1 rounded-md bg-extra-shadow text-extra-tint hover:shadow-right-sm hover:shadow-extra " +
        dimensions[size].container
      }
    >
      <span className={dimensions[size].text}>Coming Soon</span>
      <Icon
        grade={200}
        filled
        variant="rounded"
        name="update"
        size={size === "big" ? 24 : 20}
      />
    </div>
  );
};

export default SoonBadge;
