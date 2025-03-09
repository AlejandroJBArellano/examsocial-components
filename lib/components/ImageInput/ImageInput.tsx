import React from "react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";
import { Icon } from "../Icon";

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
      className="flex h-28 w-full cursor-pointer items-center justify-center rounded-lg border border-black p-4 xl:h-auto xl:border-dashed xl:p-7"
    >
      <input
        accept="image/*"
        type="file"
        id="newImage"
        className="hidden"
        {...props}
      />
      <Button.Icon
        rounded
        size={24}
        filled
        className="flex p-2 xl:hidden"
        onClick={onClick}
      >
        photo
      </Button.Icon>
      <div className="hidden items-center justify-center gap-2 space-y-2 text-center xl:grid">
        <Icon name="photo" size={20} filled />
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
