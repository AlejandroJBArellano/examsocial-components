import { FocusDisplay, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

export interface RatingProps {
  count: number;
}

const Rating = ({ count }: RatingProps) => (
  <section
    className="space-y-5 rounded-lg border border-black bg-extra-tint p-8"
    aria-label={`Rating: ${count} out of 5`}
  >
    <div className="flex gap-4">
      <Icon
        name="grade"
        className="text-extra"
        size={64}
        filled
        aria-hidden="true"
      />
      <FocusDisplay>{count}</FocusDisplay>
    </div>
    <Heading3 className="ml-20">out of 5 stars</Heading3>
  </section>
);

export default Rating;
