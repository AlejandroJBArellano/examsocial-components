import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { BannerInput } from "../BannerInput";
import { FocusSpan, Heading4 } from "../FontFaces";
import { ImageUploader } from "../ImageUploader";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

export const GeneralDetails = () => {
  const { getFieldProps, values, setFieldValue } =
    useFormikContext<Yup.InferType<typeof examSchema>>();
  return (
    <section className="space-y-4">
      <Heading4>General Details</Heading4>
      <article className="space-y-1">
        <FocusSpan>Banner</FocusSpan>
        {values.image ? (
          <ImageUploader
            image={values.image as File}
            onDelete={() => setFieldValue("image", null)}
          />
        ) : (
          <BannerInput
            onChange={(e) => {
              if (e.target.files) {
                setFieldValue("image", e.target.files[0]);
              }
            }}
          />
        )}
      </article>
      <article className="space-y-1">
        <FocusSpan>Title</FocusSpan>
        <Input
          placeholder="The title of your exam"
          className="w-full"
          {...getFieldProps("title")}
        />
      </article>
      <article className="space-y-1">
        <FocusSpan>Description</FocusSpan>
        <Textarea
          placeholder="A brief description of your exam"
          className="w-full"
          {...getFieldProps("description")}
        />
      </article>
    </section>
  );
};
