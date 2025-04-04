import { PropsWithChildren } from "react";
import { FocusSpan, Span } from "../FontFaces";

const Tab = ({
  selected,
  children,
}: PropsWithChildren<{ selected?: boolean }>) => {
  return (
    <div
      className={`border-black px-4 py-2 xl:px-5 xl:py-3 ${
        selected
          ? "bg-secondary"
          : "cursor-pointer hover:border-secondary-shadow hover:bg-secondary hover:text-secondary-shadow"
      } border-x-sm`}
    >
      {selected ? <FocusSpan>{children}</FocusSpan> : <Span>{children}</Span>}
    </div>
  );
};

export default Tab;
