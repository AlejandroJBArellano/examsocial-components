import { Delete, Edit } from "@mui/icons-material";
import * as Yup from "yup";
import { feedbackSchema } from "../../schemas";
import { handleCondition } from "../../utils";
import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

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
    <article className="w-72 space-y-4 rounded-md border border-black p-4 xl:space-y-5 xl:p-6">
      <FocusSpan>{handleCondition(feedback)}</FocusSpan>
      <Paragraph>{feedback.message}</Paragraph>
      <div className="flex items-center justify-between">
        <Button
          theme="feedback-error"
          rounded
          className="p-2 xl:p-2"
          type="button"
          onClick={() => onDelete(feedback.index)}
        >
          <Delete className="!h-8 !w-8 xl:!h-9 xl:!w-9" />
        </Button>
        <Button
          theme="light"
          rounded
          className="p-2 xl:p-2"
          type="button"
          onClick={() => onEdit(feedback.index)}
        >
          <Edit className="!h-8 !w-8 xl:!h-9 xl:!w-9" />
        </Button>
      </div>
    </article>
  );
};

export default FeedbackScreen;
