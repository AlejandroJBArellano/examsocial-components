import { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-full border-sm border-feedback-success bg-feedback-success-tint px-2 py-1 text-xs xl:text-sm">
      {children}
    </div>
  );
};

export default Tag;