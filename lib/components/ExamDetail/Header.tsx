import { Anchor, Heading3, Heading5, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";
import BannerExam from "./Banner";

export interface ExamDetailHeaderProps {
  title: string;
  author: {
    name: string;
    href: string;
  };
  category: {
    name: string;
    href: string;
  };
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
  author,
  category,
  participants,
  duration,
  rating,
  imageUrl,
}: ExamDetailHeaderProps) => {
  const formattedDuration = duration.hours
    ? `${duration.hours} ${duration.hours === 1 ? "hour" : "hours"}${duration.minutes ? ` ${duration.minutes} min` : ""}`
    : `${duration.minutes} ${duration.minutes === 1 ? "min" : "mins"}`;

  return (
    <header className="space-y-6 bg-secondary-tint p-6">
      <BannerExam imageUrl={imageUrl} title={title} />
      <Heading3>{title}</Heading3>
      <div className="flex items-center justify-between">
        <Anchor className="text-accent-shadow" href={author.href}>
          {author.name}
        </Anchor>
        <Anchor className="text-accent-shadow" href={category.href}>
          {category.name}
        </Anchor>
        <div
          className="flex items-center gap-2"
          aria-label={`${participants} participants`}
        >
          <Heading6>{participants}</Heading6>
          <Icon name="person_check" size={32} filled aria-hidden="true" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-2 text-secondary-shadow"
          aria-label={`Duration: ${formattedDuration}`}
        >
          <Icon name="timer" size={32} filled aria-hidden="true" />
          <Heading3>{formattedDuration}.</Heading3>
        </div>
        <div
          className="flex items-center gap-1"
          aria-label={`Rating: ${rating} out of 5`}
        >
          <Heading5>{rating}</Heading5>
          <Icon
            name="grade"
            size={32}
            filled
            aria-hidden="true"
            className="text-extra"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderExam;
