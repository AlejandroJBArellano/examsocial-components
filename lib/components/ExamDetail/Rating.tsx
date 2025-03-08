import { FocusDisplay, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

const Rating = ({ count }: { count: number }) => (
  <div className="space-y-5 rounded-lg border border-black bg-extra-tint p-8">
    <div className="flex gap-4">
      <Icon name="grade" className="!size-16 text-extra" />
      <FocusDisplay>{count}</FocusDisplay>
    </div>
    <Heading3 className="ml-20">out of 5 stars</Heading3>
  </div>
);

export default Rating;
