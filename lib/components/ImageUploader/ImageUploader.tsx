import { Button } from "../Button";
import { Smoll, Span } from "../FontFaces";
import { Icon } from "../Icon";

const ImageUploader = ({
  image,
  onDelete,
}: {
  image: File;
  onDelete: () => void;
}) => {
  return (
    <article className="flex items-center justify-between border-sm border-black bg-white p-2">
      <div className="flex items-center gap-2">
        <img className="h-10 w-[81px]" src={URL.createObjectURL(image)} />
        <div className="space-y-1">
          <Span className="block">{image.name}</Span>
          <Smoll>
            {image.size / 1024 > 1024
              ? (image.size / 1024 / 1024).toFixed(2)
              : (image.size / 1024).toFixed(2)}{" "}
            mb.
          </Smoll>
        </div>
      </div>
      <Button
        type="button"
        theme="feedback-error"
        rounded
        className="p-2"
        onClick={onDelete}
      >
        <Icon name="delete" className="!h-6 !w-6" />
      </Button>
    </article>
  );
};

export default ImageUploader;
