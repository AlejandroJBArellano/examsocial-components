import { ComponentPropsWithoutRef } from "react";

interface IndexButtonProps extends ComponentPropsWithoutRef<"button"> {
  bgColor: "primary" | "extra" | "neutral";
}

 const IndexButton = ({ bgColor, ...props }: IndexButtonProps) => {
  const classBgColor = {
    primary: "bg-primary",
    extra: "bg-extra",
    neutral: "bg-neutral",
  };
  console.log(classBgColor[bgColor]);
  return (
    <button
      className={
        "aspect-square rounded-full border border-black p-2 transition-all duration-300 ease-out hover:shadow-right-sm " +
        classBgColor[bgColor]
      }
      {...props}
    />
  );
};

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    role="img"
  >
    <path
      d="M6.54998 13L0.849976 7.3L2.27498 5.875L6.54998 10.15L15.725 0.974998L17.15 2.4L6.54998 13Z"
      fill="black"
    />
  </svg>
);

IndexButton.CheckMark = CheckMark;

export default IndexButton;