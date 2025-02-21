import { PropsWithChildren } from "react";

const FocusDisplay = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-[56px] font-bold font-['Sentient'] leading-[64px] tracking-wide xl:text-[64px] xl:leading-[72px] xl:tracking-wider">
      {children}
    </h1>
  );
};

export default FocusDisplay;
