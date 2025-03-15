import { cn } from "@/utils";
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
    <article className="space-y-1">
      <div className="flex items-center justify-between">
        <FocusSpan>{label}</FocusSpan>
        <Smoll>{helperText}</Smoll>
      </div>
      <div className={`rounded-md ${error ? "bg-feedback-error-tint" : ""}`}>
        <Textarea
          {...textareaProps}
          error={!!error}
          className={cn("w-full", textareaProps?.className)}
        />
        {error && (
          <Smoll className="px-2 py-1 text-feedback-error">{error}</Smoll>
        )}
      </div>
    </article>
  );
};
