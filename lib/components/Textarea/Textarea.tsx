import { cn } from "@/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = ({ error, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={
        cn(
          "peer rounded-md border border-black bg-light px-4 py-3 shadow-right-sm transition-all duration-300 ease-in-out",
          "hover:border-black hover:shadow-black",
          "placeholder:text-zinc-700 placeholder-shown:shadow-none placeholder-shown:hover:shadow-right-sm placeholder-shown:focus:shadow-right-sm placeholder-shown:focus:shadow-primary",
          "focus:border-primary focus:shadow-right-sm focus:shadow-primary focus:outline-none",
          "xl:px-4 xl:py-2 xl:text-lg xl:placeholder:text-lg",
          "hover:shadow-right",
          {
            "border-feedback-error bg-feedback-error-tint text-feedback-error shadow-right-sm shadow-feedback-error":
              error,
            "hover:border-feedback-error hover:!shadow-feedback-error": error,
            "placeholder:text-feedback-error placeholder-shown:focus:bg-light":
              error,
            "focus:border-feedback-error focus:text-black focus:shadow-feedback-error":
              error,
          },
          props.className,
        ) + " shadow-right-sm"
      }
    ></textarea>
  );
};

export default Textarea;
