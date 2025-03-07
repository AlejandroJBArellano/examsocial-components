import { Timer } from "@mui/icons-material";
import { Anchor, Heading4, Heading6, Paragraph } from "../FontFaces";

interface IExamCardProps {
  image: string;
  title: string;
  description: string;
  time: string;
  tag: string;
  small?: boolean;
  link?: string;
}

const ExamCard = ({
  image,
  title,
  description,
  time,
  tag,
  small,
  link,
}: IExamCardProps) => {
  return (
    <section className="space-y-3">
      <article className="space-y-1">
        <Heading4>{title}</Heading4>
        <img
          className="w-full rounded-lg border-2 border-black shadow-right-sm"
          src={image}
          alt={title}
        />
      </article>
      <Paragraph className="line-clamp-3">{description}</Paragraph>
      <article className="flex items-center justify-between">
        <Anchor className="text-accent-shadow" href={link}>
          {tag}
        </Anchor>
        <div className="flex items-center gap-2 text-secondary-shadow">
          <Timer />
          <Heading6>{time}</Heading6>
        </div>
      </article>
    </section>
  );
};

export default ExamCard;
