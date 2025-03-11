import { Anchor, Heading3, Heading5, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";
import BannerExam from "./Banner";

export interface HeaderExamProps {
  title: string;
  authorName: string;
  category: string;
  participants: number;
  duration: {
    hours?: number;
    minutes?: number;
  };
  rating: number;
  imageUrl: string;
}

const HeaderExam = ({
  title,
  authorName,
  category,
  participants,
  duration,
  rating,
  imageUrl,
}: HeaderExamProps) => {
  const formattedDuration = duration.hours
    ? `${duration.hours} ${duration.hours === 1 ? "hour" : "hours"}${duration.minutes ? ` ${duration.minutes} min` : ""}`
    : `${duration.minutes} ${duration.minutes === 1 ? "min" : "mins"}`;

  return (
    <header className="space-y-6 bg-secondary-tint p-6">
      <BannerExam imageUrl={imageUrl} title={title} />
      <div className="space-y-3">
        <h1>
          <Heading3>{title}</Heading3>
        </h1>
        <div className="flex justify-between">
          <Anchor className="text-accent-shadow" href="/profile">
            {authorName}
          </Anchor>
          <Anchor
            className="text-accent-shadow"
            href={`/category/${category.toLowerCase()}`}
          >
            {category}
          </Anchor>
          <div
            className="flex items-center gap-2"
            aria-label={`${participants} participants`}
          >
            <Heading6>{participants}</Heading6>
            <Icon name="person_check" className="!size-8" aria-hidden="true" />
          </div>
        </div>
        <div className="flex justify-between">
          <div
            className="flex items-center gap-2 text-secondary-shadow"
            aria-label={`Duration: ${formattedDuration}`}
          >
            <Icon name="timer" className="!size-8" aria-hidden="true" />
            <Heading3>{formattedDuration}</Heading3>
          </div>
          <div
            className="flex items-center gap-1"
            aria-label={`Rating: ${rating} out of 5`}
          >
            <Heading5>{rating}</Heading5>
            <Icon
              name="grade"
              className="!size-8 text-extra"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderExam;
