import { Grade } from "@mui/icons-material";
import { FocusDisplay, Heading3 } from "../FontFaces";

const Rating = ({ count }: { count: number }) => (
  <div className="rounded-lg p-8 border border-black bg-extra-tint space-y-5">
    <div className="flex gap-4">
      <Grade className="!size-16 text-extra" />
      <FocusDisplay>{count}</FocusDisplay>
    </div>
    <Heading3 className="ml-20">out of 5 stars</Heading3>
  </div>
);

export default Rating;
