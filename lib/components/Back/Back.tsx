import { PropsWithChildren } from "react";
import { FocusSpan } from "../FontFaces";
import { Icon } from "../Icon";

const Back = ({ children }: PropsWithChildren) => {
  return (
    <a className="inline-flex items-center justify-start gap-1 self-stretch text-accent-shadow xl:gap-2">
      <Icon name="arrow_back" size={24} />
      <FocusSpan>{children}</FocusSpan>
    </a>
  );
};

export default Back;
