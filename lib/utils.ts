import clsx, { ClassValue } from "clsx";
import "react-material-symbols/rounded";
import { twMerge } from "tailwind-merge";
import * as Yup from "yup";
import { feedbackSchema } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const regexYouTubeURL = new RegExp(
  /^(https?:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/,
);

export const handleCondition = (
  feedback: Yup.InferType<typeof feedbackSchema>,
) => {
  if (feedback.condition === "EQUAL_TO") {
    return `Equal to ${feedback.equal}`;
  }
  if (feedback.condition === "GREATER_THAN") {
    return `More than ${feedback.gt}`;
  }
  if (feedback.condition === "LESS_THAN") {
    return `Less than ${feedback.lt}`;
  }
  if (feedback.condition === "BETWEEN") {
    return `Between ${feedback.min} and ${feedback.max}`;
  }
  return "All";
};
