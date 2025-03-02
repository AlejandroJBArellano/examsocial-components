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
          className="h-[180px] rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] border-2 border-black"
          src={image}
          alt={title}
        />
      </article>
      <Paragraph className="line-clamp-3">{description}</Paragraph>
      <article className="flex justify-between items-center">
        <Anchor className="text-accent-shadow" href={link}>
          {tag}
        </Anchor>
        <div className="flex gap-2 items-center text-secondary-shadow">
          <Timer />
          <Heading6>{time}</Heading6>
        </div>
      </article>
    </section>
  );
};

export default ExamCard;
