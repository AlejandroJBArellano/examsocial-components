import { Photo } from "@mui/icons-material";
import React from "react";
import { Button } from "../Button";

const ImageInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  return (
    <label
      htmlFor="newImage"
      className="p-4 border cursor-pointer w-full h-28 border-black rounded-lg flex items-center justify-center"
    >
      <input type="file" id="newImage" className="hidden" {...props} />
      <Button
        rounded
        className="p-2 flex"
        onClick={() => document.getElementById("newImage")?.click()}
      >
        <Photo className="!w-5 !h-5" />
      </Button>
    </label>
  );
};

export default ImageInput;
