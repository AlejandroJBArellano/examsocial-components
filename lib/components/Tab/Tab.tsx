import { cn } from "@/utils";
import { PropsWithChildren } from "react";
import { FocusSpan, Span } from "../FontFaces";

const Tab = ({
  selected,
  children,
  theme = "primary",
}: PropsWithChildren<{
  selected?: boolean;
  theme?: "primary" | "secondary";
}>) => {
  const themeSelector = {
    primary: {
      background: "bg-primary text-light",
      unselected:
        "cursor-pointer hover:border-primary-shadow hover:bg-primary-tint hover:text-primary-shadow",
    },
    secondary: {
      background: "bg-secondary",
      unselected:
        "cursor-pointer hover:border-secondary-shadow hover:bg-secondary-tint hover:text-secondary-shadow",
    },
  };
  return (
    <div
      className={cn(
        "border-x-sm border-black px-4 py-2 xl:px-5 xl:py-3",
        selected
          ? themeSelector[theme].background
          : themeSelector[theme].unselected,
      )}
    >
      {selected ? <FocusSpan>{children}</FocusSpan> : <Span>{children}</Span>}
    </div>
  );
};

export default Tab;
