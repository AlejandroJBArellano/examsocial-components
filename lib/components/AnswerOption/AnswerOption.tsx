import { PropsWithChildren } from "react";
import { Answer } from "../FontFaces";

interface IAnswerOption {
  type?: "default" | "selectable" | "viewOnly";
  checked?: boolean;
}

const AnswerOption = ({
  children,
  checked,
  type = "default",
}: PropsWithChildren<IAnswerOption>) => {
  const theme = {
    default: "bg-white",
    selectable: "bg-secondary-tint text-secondary-shadow cursor-pointer",
    viewOnly: "bg-feedback-success-tint cursor-not-allowed",
  };

  return (
    <div
      className={
        "rounded-lg border-sm border-black px-4 py-3 text-xl leading-6 tracking-[0.4px] hover:shadow-right-sm hover:shadow-black xl:px-5 xl:py-4 xl:text-2xl xl:leading-7 xl:tracking-[0.48px] " +
        " " +
        (type === "selectable" && checked
          ? "bg-secondary text-black"
          : theme[type])
      }
    >
      <Answer>{children}</Answer>
    </div>
  );
};

export default AnswerOption;
