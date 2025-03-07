import { Delete } from "@mui/icons-material";
import { Button } from "../Button";
import { Smoll, Span } from "../FontFaces";

const ImageUploader = ({
  image,
  onDelete,
}: {
  image: File;
  onDelete: () => void;
}) => {
  return (
    <article className="p-2 flex items-center justify-between bg-white border-sm border-black">
      <div className="gap-2 flex items-center">
        <img className="w-[81px] h-10" src={URL.createObjectURL(image)} />
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
      <Button type="button" theme="feedback-error" rounded className="p-2">
        <Delete className="!w-6 !h-6" onClick={onDelete} />
      </Button>
    </article>
  );
};

export default ImageUploader;
