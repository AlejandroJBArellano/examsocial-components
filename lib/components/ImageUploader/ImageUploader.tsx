import { Close } from "@mui/icons-material";
import { Smoll, Span } from "../FontFaces";

const ImageUploader = ({ image }: { image: File }) => {
  return (
    <article className="p-2 flex items-center justify-between bg-primary-tint border-sm border-primary-shadow">
      <div className="gap-2 flex items-center">
        <img className="w-[81px] h-10" src={URL.createObjectURL(image)} />
        <div className="space-y-1">
          <Span className="block text-primary-shadow">{image.name}</Span>
          <Smoll>{image.size} mb.</Smoll>
        </div>
      </div>
      <Close className="!w-6 !h-6 text-primary" />
    </article>
  );
};

export default ImageUploader;
