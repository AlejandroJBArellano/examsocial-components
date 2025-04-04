import { cn } from "@/utils";
import { PropsWithChildren } from "react";
import { FocusSpan, Span } from "../FontFaces";

const Tab = ({
  selected,
  children,
}: PropsWithChildren<{ selected?: boolean }>) => {
  return (
    <div
      className={cn(
        "border-x-sm border-black px-4 py-2 xl:px-5 xl:py-3",
        selected
          ? "bg-secondary"
          : "cursor-pointer hover:border-secondary-shadow hover:bg-secondary hover:text-secondary-shadow",
      )}
    >
      {selected ? <FocusSpan>{children}</FocusSpan> : <Span>{children}</Span>}
    </div>
  );
};

export default Tab;
