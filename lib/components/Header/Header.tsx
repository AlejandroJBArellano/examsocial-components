import Logo from "@/illustrations/logo";
import { PropsWithChildren } from "react";

interface HeaderProps extends PropsWithChildren {
  logoHref?: string;
}

const Header = ({ children, logoHref }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b-sm border-black bg-primary px-4 py-2 md:px-6 xl:bg-white xl:px-7 xl:py-3 2xl:px-8 2xl:py-4">
      {logoHref ? (
        <a href={logoHref}>
          <Logo />
        </a>
      ) : (
        <Logo />
      )}
      {children}
    </header>
  );
};

export default Header;
