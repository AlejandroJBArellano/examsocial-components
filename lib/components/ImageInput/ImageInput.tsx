import React, { useState } from "react";
import { Button } from "../Button";
import { Span } from "../FontFaces";
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

  // Dragging state
  if (isDragging) {
    return (
      <label
        htmlFor="newImage"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-primary bg-primary-tint px-6 py-8 transition-all duration-200 ease-out"
      >
        <input
          accept="image/*"
          type="file"
          id="newImage"
          className="hidden"
          {...props}
        />
        <Icon name="place_item" size={32} filled />
        <Span className="block text-center font-medium text-primary">
          Drop it like it's hot
        </Span>
      </label>
    );
  }

  // Regular idle state
  return (
    <label
      draggable
      htmlFor="newImage"
      className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-black bg-light px-6 py-8 transition-all duration-200 ease-out hover:bg-white"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="newImage"
        className="hidden"
        {...props}
        accept={props.accept ?? "image/*"}
      />

      {/* Icon */}
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-black bg-white shadow-right-sm">
        <Icon name="description" size={20} filled />
      </span>

      {/* Copy */}
      <div className="flex flex-col items-center gap-1 text-center">
        <Span className="font-medium text-zinc-700">
          Drag &amp; drop your image here
        </Span>
        <Span className="text-sm text-zinc-400">or</Span>
      </div>

      {/* CTA */}
      <Button rounded theme="light" onClick={onClick}>
        Browse your device
      </Button>
    </label>
  );
};

export default ImageInput;

