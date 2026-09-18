import { cn } from "@/utils";
import { HTMLAttributes, PropsWithChildren } from "react";
import { FocusSpan, Span } from "../FontFaces";

export interface TabProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  selected?: boolean;
  theme?: "primary" | "secondary";
  onClick?: () => void;
}

const Tab = ({
  selected,
  children,
  theme = "primary",
  onClick,
  onKeyDown,
  className,
  ...props
}: TabProps) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      e.preventDefault();
      onClick();
    }
    onKeyDown?.(e);
  };

  return (
    <div
      role="tab"
      aria-selected={!!selected}
      tabIndex={selected ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "border-x-sm border-black bg-light px-4 py-2 xl:px-5 xl:py-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-black",
        selected
          ? themeSelector[theme].background
          : themeSelector[theme].unselected,
        className,
      )}
      {...props}
    >
      {selected ? <FocusSpan>{children}</FocusSpan> : <Span>{children}</Span>}
    </div>
  );
};

export default Tab;
