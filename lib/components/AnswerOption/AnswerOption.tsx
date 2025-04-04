import { PropsWithChildren } from "react";
import { Answer } from "../FontFaces";

interface IAnswerOption {
  type?: "default" | "selectable" | "viewOnly";
  checked?: boolean;
  onClick?: () => void;
}

const AnswerOption = ({
  children,
  checked,
  type = "default",
  onClick,
}: PropsWithChildren<IAnswerOption>) => {
  const theme = {
    default: "bg-light",
    selectable: "bg-secondary-tint text-secondary-shadow cursor-pointer",
    viewOnly: "bg-feedback-success-tint cursor-not-allowed",
  };

  return (
    <button
      className={
        "w-full rounded-lg border-sm border-black px-4 py-3 text-start text-xl leading-6 tracking-[0.4px] hover:shadow-right-sm hover:shadow-black xl:px-5 xl:py-4 xl:text-2xl xl:leading-7 xl:tracking-[0.48px] " +
        " " +
        (type === "selectable" && checked
          ? "bg-secondary text-black"
          : theme[type])
      }
      onClick={onClick}
    >
      <Answer>{children}</Answer>
    </button>
  );
};

export default AnswerOption;
