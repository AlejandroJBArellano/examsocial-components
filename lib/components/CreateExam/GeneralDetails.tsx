import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas/index";
import { BannerInput } from "../BannerInput";
import { FocusSpan, Heading4 } from "../FontFaces";
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
        {values.image && (
          <img
            src={URL.createObjectURL(values.image as Blob)}
            alt="Banner"
            className="w-full object-cover"
          />
        )}
        <BannerInput
          onChange={(e) => {
            if (e.target.files) {
              setFieldValue("image", e.target.files[0]);
            }
          }}
        />
      </article>
      <article className="space-y-1">
        <FocusSpan>Name</FocusSpan>
        <Input
          placeholder="The name of your exam"
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
