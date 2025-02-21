import { PropsWithChildren } from "react";

const Display = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-[56px] font-light font-['Sentient'] leading-[64px] tracking-wide xl:text-[64px] xl:leading-[72px] xl:tracking-wider">
      {children}
    </h1>
  );
};

export default Display;
