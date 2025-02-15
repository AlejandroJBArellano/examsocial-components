import clsx, { ClassValue } from "clsx";
import "react-material-symbols/rounded";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const regexYouTubeURL = new RegExp(
  /^(https?:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/
);
