import { PropsWithChildren } from "react";

const Answer = ({ children }: PropsWithChildren) => (
  <p className="text-xl tracking-tight xl:text-2xl xl:leading-7 xl:tracking-wide">
    {children}
  </p>
);

export default Answer;
