import Logo from "@/illustrations/logo";
import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex items-center justify-between border-b-sm border-black bg-primary p-4 md:px-6 xl:bg-white xl:px-7 xl:py-5 2xl:px-8 2xl:py-5">
      <Logo />
      {children}
    </header>
  );
};

export default Header;
