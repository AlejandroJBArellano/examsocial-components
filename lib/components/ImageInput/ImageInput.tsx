import React, { useState } from "react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";
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
      >
        <input
          accept="image/*"
          type="file"
          id="newImage"
          className="hidden"
          {...props}
        />
        <div
          data-isHovering="true"
          data-responsive="xl:"
          className="bg-brand-accent-tint outline-neutral-dark inline-flex h-[204px] w-[640px] items-center justify-center gap-4 overflow-hidden rounded-lg p-7 outline-2 outline-offset-[-2px]"
        >
          <div className="inline-flex flex-col items-center justify-center gap-2">
            <div data-svg-wrapper data-shape="place_item">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V15C5 14.0833 5.32639 13.2986 5.97917 12.6458C6.63194 11.9931 7.41667 11.6667 8.33333 11.6667H15V15H8.33333V31.6667H31.6667V15H25V11.6667H31.6667C32.5833 11.6667 33.3681 11.9931 34.0208 12.6458C34.6736 13.2986 35 14.0833 35 15V31.6667C35 32.5833 34.6736 33.3681 34.0208 34.0208C33.3681 34.6736 32.5833 35 31.6667 35H8.33333ZM20 26.6667L13.3333 20L15.6667 17.6667L18.3333 20.2917V0H21.6667V20.2917L24.3333 17.6667L26.6667 20L20 26.6667Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="text-text-on-GRAY-300 justify-start font-['Satoshi'] text-lg font-normal leading-normal">
              Drop it like it's hot
            </div>
          </div>
        </div>
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
