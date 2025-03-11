import React, { useState } from "react";
import { Button } from "../Button";
import { FocusSpan, Span } from "../FontFaces";
import { Icon } from "../Icon";

const ImageInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  const [isDragging, setIsDragging] = useState(false);

  const onClick = () => {
    document.getElementById("newImage")?.click();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Create a synthetic event to trigger the onChange handler
      const fileInput = document.getElementById("newImage") as HTMLInputElement;

      if (fileInput && props.onChange) {
        // Update the file input's files property
        const dataTransfer = new DataTransfer();

        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          dataTransfer.items.add(e.dataTransfer.files[i]);
        }

        fileInput.files = dataTransfer.files;

        // Create and dispatch the change event
        const event = new Event("change", { bubbles: true });
        fileInput.dispatchEvent(event);

        // Call the onChange handler directly
        props.onChange({
          target: fileInput,
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  // If dragging, display the special UI
  if (isDragging) {
    return (
      <label
        htmlFor="newImage"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="inline-flex h-36 w-full max-w-sm flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-black bg-accent-tint p-4 xl:h-auto xl:max-w-2xl xl:border-dashed xl:p-7"
      >
        <input
          accept="image/*"
          type="file"
          id="newImage"
          className="hidden"
          {...props}
        />
        <Icon name="place_item" size={40} filled />
        <Span className="block text-center">Drop it like it's hot</Span>
      </label>
    );
  }

  // Regular UI when not dragging
  return (
    <label
      draggable
      htmlFor="newImage"
      className="flex h-36 w-full max-w-sm cursor-pointer items-center justify-center rounded-lg border border-black p-4 xl:h-auto xl:max-w-2xl xl:border-dashed xl:p-7"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
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
        <Icon name="photo" size={24} filled />
        <Span>Drag and drop your images here to upload</Span>
        <Span>or</Span>
        <Button rounded theme="extra" onClick={onClick}>
          <FocusSpan>Select from your files</FocusSpan>
        </Button>
      </div>
    </label>
  );
};

export default ImageInput;
