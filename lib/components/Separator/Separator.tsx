import { PropsWithChildren } from "react";

const Separator = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex gap-4 items-center">
      {children && (
        <p className="text-lg md:text-[20px] leading-[20px] md:leading-[24px] font-medium md:tracking-[0.4px] tracking-[0.36px]">
          {children}
        </p>
      )}
      <div className="flex w-full h-[1px] bg-black flex-auto" />
    </div>
  );
};

export default Separator;
