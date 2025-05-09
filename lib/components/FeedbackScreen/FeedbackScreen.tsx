import { feedbackSchema } from "@/schemas";
import { handleCondition } from "@/utils";
import * as Yup from "yup";
import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

type Feedback = Yup.InferType<typeof feedbackSchema>;

type FeedbackScreenProps = Feedback & {
  onEdit: () => void;
  onDelete: () => void;
};

const FeedbackScreen = ({
  onEdit,
  onDelete,
  ...feedback
}: FeedbackScreenProps) => {
  return (
    <article className="w-full min-w-72 max-w-xs space-y-4 rounded-md border border-black p-4 xl:space-y-5 xl:p-6">
      <FocusSpan>{handleCondition(feedback)}</FocusSpan>
      <Paragraph>{feedback.message}</Paragraph>
      <div className="flex items-center justify-between">
        <Button.Icon
          theme="feedback-error"
          rounded
          size={24}
          type="button"
          filled
          onClick={onDelete}
        >
          delete
        </Button.Icon>
        <Button.Icon
          theme="light"
          rounded
          size={24}
          type="button"
          filled
          onClick={onEdit}
        >
          edit
        </Button.Icon>
      </div>
    </article>
  );
};

export default FeedbackScreen;
