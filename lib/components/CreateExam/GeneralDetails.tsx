import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { BannerInput } from "../BannerInput";
import { FocusSpan, Heading4 } from "../FontFaces";
import { ImageUploader } from "../ImageUploader";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

export const GeneralDetails = () => {
  const { getFieldProps, values, setFieldValue, errors } =
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
        {errors.image && (
          <p className="text-sm text-red-500">{errors.image.toString()}</p>
        )}
      </article>
      <article className="space-y-1">
        <FocusSpan>Title</FocusSpan>
        <Input
          placeholder="The title of your exam"
          className="w-full"
          {...getFieldProps("title")}
          error={!!errors.title}
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.toString()}</p>
        )}
      </article>
      <article className="space-y-1">
        <FocusSpan>Description</FocusSpan>
        <Textarea
          placeholder="A brief description of your exam"
          className="w-full"
          {...getFieldProps("description")}
          error={!!errors.description}
        />
        {errors.description && (
          <p className="text-sm text-red-500">
            {errors.description.toString()}
          </p>
        )}
      </article>
    </section>
  );
};
