import Logo from "@/Illustrations/logo";
import { Button } from "../Button";
import { ButtonTheme } from "../Button/Button";

interface HeaderProps {
  buttonText?: string;
  buttonTheme?: ButtonTheme;
  showButton?: boolean;
}

const Header = ({
  buttonText = "Get started",
  buttonTheme = "accent",
  showButton = true,
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b-sm border-black p-4 md:px-6 xl:px-7 xl:py-5 2xl:px-8 2xl:py-5">
      <Logo />
      {showButton && <Button theme={buttonTheme}>{buttonText}</Button>}
    </header>
  );
};

export default Header;
