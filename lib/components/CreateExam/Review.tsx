import { Visibility } from "@mui/icons-material";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas/index";
import { Button } from "../Button";
import ExamCard from "../ExamCard/ExamCard";
import { FocusSpan, Heading3, Heading4 } from "../FontFaces";

export const Review = () => {
  const formik = useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-4">
      <article className="flex justify-between items-center">
        <Heading3>Review</Heading3>
        <Button
          theme="extra"
          className="flex items-center justify-center gap-2"
        >
          <Visibility className="!w-5 !h-5" />
          <FocusSpan>Preview exam</FocusSpan>
        </Button>
      </article>
      <article className="space-y-10">
        <Heading4>General Details</Heading4>
        <ExamCard
          title={formik.values.title}
          description={formik.values.description}
          tag="XD"
          time="10 min"
          image="https://placecats.com/300/200"
        />
      </article>
      <Heading4>Questions</Heading4>
      <Heading4>Additional Content</Heading4>
      <Heading4>Advanced Settings</Heading4>
    </section>
  );
};
