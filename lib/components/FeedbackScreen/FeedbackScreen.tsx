import { Delete, Edit } from "@mui/icons-material";
import * as Yup from "yup";
import { feedbackSchema } from "../../schemas";
import { handleCondition } from "../../utils";
import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

type Feedback = Yup.InferType<typeof feedbackSchema>;

const FeedbackScreen = (feedback: Feedback) => {
  return (
    <article className="p-4 space-y-4 border border-black rounded-md xl:space-y-5 xl:p-6">
      <FocusSpan>{handleCondition(feedback)}</FocusSpan>
      <Paragraph>{feedback.message}</Paragraph>
      <div className="flex items-center justify-between">
        <Button
          theme="feedback-error"
          rounded
          className="p-2 xl:p-2"
          type="button"
        >
          <Delete className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
        <Button theme="light" rounded className="p-2 xl:p-2" type="button">
          <Edit className="!w-8 !h-8 xl:!w-9 xl:!h-9" />
        </Button>
      </div>
    </article>
  );
};

export default FeedbackScreen;
