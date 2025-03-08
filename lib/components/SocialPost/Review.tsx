import { FocusSmoll, FocusSpan, Smoll } from "../FontFaces";
import { Icon } from "../Icon";
import { ProfilePlaceholder } from "../ProfilePlaceholder";

interface IReviewSocialPost {
  exam: {
    title: string;
    image: string;
  };
}

const Review = ({ exam }: IReviewSocialPost) => {
  return (
    <article className="space-y-2">
      <div className="flex gap-2">
        <div className="size-6">
          <ProfilePlaceholder gender="male" />
        </div>
        <div className="space-y-1">
          <FocusSmoll className="block">John Doe</FocusSmoll>
          <div className="flex gap-1 text-gray-600">
            <Smoll>Left a</Smoll>
            <div className="flex items-center text-extra-shadow">
              <Icon name="grade" className="!size-2.5" />
              <Icon name="grade" className="!size-2.5" />
              <Icon name="grade" className="!size-2.5" />
              <Icon name="grade" className="!size-2.5" />
              <Icon name="grade" className="!size-2.5" />
            </div>
            <Smoll>review</Smoll>
          </div>
        </div>
      </div>
      <div className="flex gap-7">
        <FocusSpan>
          Lorem ipsum dolor sit amet consectetur. Suscipit vel tempus vitae arcu
          hendrerit eget tortor pharetra. Magna orci sodales accumsan int...
        </FocusSpan>
        <div className="space-y-2">
          <img
            className="block h-20 rounded-lg border-2 border-black shadow-right-sm"
            src={exam.image}
            alt={exam.title}
          />
          <FocusSpan className="block">{exam.title}</FocusSpan>
        </div>
      </div>
    </article>
  );
};

export default Review;
