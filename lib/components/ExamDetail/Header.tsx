import { Timing } from "@/types";
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
  participants?: number;
  timing?: Timing;
  rating?: number;
  imageUrl: string;
}

const HeaderExam = ({
  title,
  author,
  category,
  participants,
  timing,
  rating,
  imageUrl,
}: ExamDetailHeaderProps) => {
  const formattedDuration = timing
    ? timing.hours
      ? `${timing.hours} ${timing.hours === 1 ? "hour" : "hours"}${timing.minutes ? ` ${timing.minutes} min` : ""}${timing.seconds ? ` ${timing.seconds} sec` : ""}`
      : `${timing.minutes} ${timing.minutes === 1 ? "min" : "mins"}`
    : null;

  return (
    <header className="space-y-6 bg-secondary-tint p-6">
      <BannerExam imageUrl={imageUrl} title={title} />
      <Heading3>{title}</Heading3>
      <div className="flex items-center justify-between gap-4">
        <Anchor className="text-accent-shadow" href={category.href}>
          {category.name}
        </Anchor>
        <Anchor className="flex-1 text-accent-shadow" href={author.href}>
          {author.name}
        </Anchor>
        {participants ? (
          <div
            className="flex items-center gap-2"
            aria-label={`${participants} participants`}
          >
            <Heading6>{participants}</Heading6>
            <Icon name="person_check" size={32} filled aria-hidden="true" />
          </div>
        ) : null}
      </div>
      {timing || rating ? (
        <div className="flex items-center justify-between">
          {timing && (
            <div
              className="flex items-center gap-2 text-secondary-shadow"
              aria-label={`Duration: ${formattedDuration}`}
            >
              <Icon name="timer" size={32} filled aria-hidden="true" />
              <Heading3>{formattedDuration}.</Heading3>
            </div>
          )}
          {rating ? (
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
          ) : null}
        </div>
      ) : null}
    </header>
  );
};

export default HeaderExam;
