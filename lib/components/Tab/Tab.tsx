import { PropsWithChildren } from "react";
import { FocusSpan, Span } from "../FontFaces";

const Tab = ({
  selected,
  children,
}: PropsWithChildren<{ selected?: boolean }>) => {
  return (
    <div
      className={`py-2 px-4 border-black xl:py-3 xl:px-5 ${
        selected
          ? "bg-secondary"
          : "hover:text-secondary-shadow hover:border-secondary-shadow hover:bg-secondary cursor-pointer"
      } border-sm`}
    >
      {selected ? <FocusSpan>{children}</FocusSpan> : <Span>{children}</Span>}
    </div>
  );
};

export default Tab;
