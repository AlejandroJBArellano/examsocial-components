import { PropsWithChildren } from "react";

const Anchor = ({ children }: PropsWithChildren) => (
  <a className="text-base font-medium underline leading-tight xl:text-lg xl:leading-normal">
    {children}
  </a>
);

export default Anchor;
