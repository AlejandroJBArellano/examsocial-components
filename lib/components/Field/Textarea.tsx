import { ReactNode, TextareaHTMLAttributes } from "react";
import { FocusSpan, Smoll } from "../FontFaces";
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
        <FocusSpan>{label}</FocusSpan>
        <Smoll>{helperText}</Smoll>
      </div>
      <div className="rounded-b-md bg-feedback-error-tint">
        <Textarea {...textareaProps} error={!!error} />
        {error && (
          <Smoll className="px-2 py-1 text-feedback-error">{error}</Smoll>
        )}
      </div>
    </article>
  );
};
