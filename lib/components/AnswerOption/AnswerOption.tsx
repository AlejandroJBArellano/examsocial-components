import { PropsWithChildren } from "react";

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
        "hover:shadow-right-sm hover:shadow-black border-sm border-black py-3 px-4 rounded-lg text-xl leading-6 tracking-[0.4px] xl:text-2xl xl:leading-7 xl:py-4 xl:px-5 xl:tracking-[0.48px] " +
        " " +
        (type === "selectable" && checked
          ? "text-black bg-secondary"
          : theme[type])
      }
    >
      {children}
    </div>
  );
};

export default AnswerOption;
