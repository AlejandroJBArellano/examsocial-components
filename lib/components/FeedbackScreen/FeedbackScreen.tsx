import * as Yup from "yup";
import { feedbackSchema } from "../../schemas";
import { handleCondition } from "../../utils";
import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";
import { Icon } from "../Icon";

type Feedback = Yup.InferType<typeof feedbackSchema>;

type FeedbackScreenProps = Feedback & {
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  index: number;
};

const FeedbackScreen = ({
  onEdit,
  onDelete,
  ...feedback
}: FeedbackScreenProps) => {
  return (
    <article className="w-full min-w-72 space-y-4 rounded-md border border-black p-4 xl:space-y-5 xl:p-6">
      <FocusSpan>{handleCondition(feedback)}</FocusSpan>
      <Paragraph>{feedback.message}</Paragraph>
      <div className="flex items-center justify-between">
        <Button
          theme="feedback-error"
          rounded
          className="flex items-center justify-center p-2"
          type="button"
          onClick={() => onDelete(feedback.index)}
        >
          <Icon name="delete" size={24} />
        </Button>
        <Button
          theme="light"
          rounded
          className="flex items-center justify-center p-2"
          type="button"
          onClick={() => onEdit(feedback.index)}
        >
          <Icon name="edit" size={24} />
        </Button>
      </div>
    </article>
  );
};

export default FeedbackScreen;
