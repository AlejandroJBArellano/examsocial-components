import Logo from "@/Illustrations/logo";
import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex items-center justify-between border-b-sm border-black p-4 md:px-6 xl:px-7 xl:py-5 2xl:px-8 2xl:py-5">
      <Logo />
      {children}
    </header>
  );
};

export default Header;
