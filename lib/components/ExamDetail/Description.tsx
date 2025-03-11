import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

export interface ExamDescriptionProps {
  description: string;
  onStartExam: () => void;
  onFavorite: () => void;
  onBookmark: () => void;
}

const ExamDescription = ({
  description,
  onStartExam,
  onFavorite,
  onBookmark,
}: ExamDescriptionProps) => {
  return (
    <section className="space-y-6 bg-primary-tint px-4 py-6">
      <Paragraph>{description}</Paragraph>
      <div className="flex items-end justify-between">
        <div className="flex gap-3">
          <Button.Icon
            theme="light"
            className="bg-transparent p-2"
            size={20}
            onClick={onFavorite}
            aria-label="Add to favorites"
          >
            favorite
          </Button.Icon>
          <Button.Icon
            theme="light"
            className="bg-transparent p-2"
            size={20}
            onClick={onBookmark}
            aria-label="Bookmark exam"
          >
            bookmark
          </Button.Icon>
        </div>
        <Button theme="accent" onClick={onStartExam}>
          <FocusSpan>Start exam</FocusSpan>
        </Button>
      </div>
    </section>
  );
};

export default ExamDescription;
