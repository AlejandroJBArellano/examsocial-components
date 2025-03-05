import { Photo } from "@mui/icons-material";
import React from "react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";

const ImageInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const onClick = () => {
    document.getElementById("newImage")?.click();
  };
  return (
    <label
      draggable
      htmlFor="newImage"
      className="p-4 border xl:p-7 xl:border-dashed cursor-pointer w-full h-28 xl:h-auto border-black rounded-lg flex items-center justify-center"
    >
      <input type="file" id="newImage" className="hidden" {...props} />
      <Button rounded className="p-2 flex xl:hidden" onClick={onClick}>
        <Photo className="!w-5 !h-5" />
      </Button>
      <div className="space-y-2 hidden xl:grid gap-2 justify-center text-center items-center">
        <Photo className="!w-10 !h-10 mx-auto" />
        {/* TODO: 
        <Span>Drag and drop your images here to upload</Span>
        <Span>or</Span> 
        */}
        <Button rounded theme="extra" onClick={onClick}>
          <FocusSpan>Select from your files</FocusSpan>
        </Button>
      </div>
    </label>
  );
};

export default ImageInput;
