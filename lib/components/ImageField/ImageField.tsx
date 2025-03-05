import { Photo } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { FocusSpan } from "../FontFaces";
import { ImageUploader } from "../ImageUploader";

const ImageField = ({
  children,
  image,
  setImage,
}: PropsWithChildren<{
  image: File;
  setImage: (image: File) => void;
}>) => {
  return (
    <div className="space-y-1">
      <FocusSpan>{children}</FocusSpan>
      {image ? (
        <ImageUploader image={image} />
      ) : (
        <label
          htmlFor="newImage"
          className="p-4 border w-full h-28 border-black rounded-lg flex items-center justify-center"
        >
          <input
            type="file"
            id="newImage"
            className="hidden"
            onChange={(e) => {
              const file = e.target?.files?.[0];
              if (file) {
                setImage(file);
              }
            }}
          />
          <Button rounded className="p-2 flex">
            <Photo className="!w-5 !h-5" />
          </Button>
        </label>
      )}
    </div>
  );
};

export default ImageField;
