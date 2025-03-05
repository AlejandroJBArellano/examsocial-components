import { PropsWithChildren } from "react";
import { FocusSpan } from "../FontFaces";
import ImageInput from "../ImageInput/ImageInput";
import { ImageUploader } from "../ImageUploader";

interface ImageFieldProps extends PropsWithChildren {
  image?: File;
  setImage: (image: File | null) => void;
  multiple?: false;
}

interface MultipleImageFieldProps extends PropsWithChildren {
  images: File[];
  setImages: (images: File[]) => void;
  multiple: true;
}

const ImageField = ({
  children,
  ...props
}: ImageFieldProps | MultipleImageFieldProps) => {
  return (
    <div className="space-y-1">
      <FocusSpan>{children}</FocusSpan>
      {props.multiple ? (
        <div className="space-y-2">
          <ImageInput
            onChange={(e) => {
              const files = e.target?.files ? Array.from(e.target.files) : [];
              props.setImages(files);
            }}
          />
          {props.images.map((image) => (
            <ImageUploader
              key={image.lastModified}
              image={image}
              onDelete={() => {
                props.setImages(
                  props.images.filter(
                    (i) => i.lastModified !== image.lastModified,
                  ),
                );
              }}
            />
          ))}
        </div>
      ) : (
        <>
          {props.image ? (
            <ImageUploader
              image={props.image}
              onDelete={() => {
                props.setImage(null);
              }}
            />
          ) : (
            <ImageInput
              onChange={(e) => {
                const file = e.target?.files?.[0];
                if (file) {
                  props.setImage(file);
                }
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ImageField;
