import { ReactNode, TextareaHTMLAttributes } from "react";
import { Textarea } from "../Textarea";

export interface TextareaFieldProps {
  label: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const TextareaField = ({
  label,
  error,
  helperText,
  textareaProps,
}: TextareaFieldProps) => {
  return (
    <article>
      <div className="grid grid-cols-2 items-center">
        <label className="font-medium xl:text-lg" htmlFor={textareaProps?.id}>
          {label}
        </label>
        <label className="text-right text-xs xl:text-sm">{helperText}</label>
      </div>
      <div className="rounded-b-md bg-feedback-error-tint">
        <Textarea {...textareaProps} error={!!error} />
        {error && (
          <div className="px-2 py-1 text-feedback-error">
            <label htmlFor={textareaProps?.id}>{error}</label>
          </div>
        )}
      </div>
    </article>
  );
};
