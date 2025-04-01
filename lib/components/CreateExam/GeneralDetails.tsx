import { useExamCreation } from "@/hooks/exam";
import { CategoryMetadata, ExamCategory } from "@/types";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { PremiumBadge } from "../Badges";
import { BannerInput } from "../BannerInput";
import { Field } from "../Field";
import { FocusSpan, Heading4, Heading6, Paragraph } from "../FontFaces";
import { Icon } from "../Icon";
import { ImageUploader } from "../ImageUploader";
import { Select } from "../Select";

export const GeneralDetails = () => {
  const { getFieldProps, values, setFieldValue, errors } =
    useFormikContext<Yup.InferType<typeof examSchema>>();

  const { userPlan } = useExamCreation();
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
        <Field
          label={<FocusSpan>Title</FocusSpan>}
          error={errors.title?.toString()}
          inputProps={{
            placeholder: "The title of your exam",
            className: "w-full",
            ...getFieldProps("title"),
            error: !!errors.title,
          }}
        />
      </article>
      <article className="space-y-1">
        <Field.Textarea
          label="Description"
          error={errors.description?.toString()}
          textareaProps={{
            placeholder: "A brief description of your exam",
            className: "w-full",
            ...getFieldProps("description"),
          }}
        />
      </article>
      <article className="space-y-1">
        <FocusSpan>Category</FocusSpan>
        <Select
          text={
            values.category ? (
              <div className="flex items-center gap-2">
                <Icon
                  name={CategoryMetadata[values.category as ExamCategory].icon}
                  size={18}
                />
                {CategoryMetadata[values.category as ExamCategory].displayName}
              </div>
            ) : (
              "Select a category"
            )
          }
        >
          {Object.entries(ExamCategory).map(([key, value]) => (
            <Select.Option
              key={key}
              onClick={() => {
                setFieldValue("category", value);
                if (value === ExamCategory.OTHER) {
                  setFieldValue(
                    "description",
                    "Please describe the category here",
                  );
                }
              }}
              checked={values.category === value}
            >
              <div className="flex items-center gap-2">
                <Icon name={CategoryMetadata[value].icon} size={18} />
                {CategoryMetadata[value].displayName}
              </div>
            </Select.Option>
          ))}
        </Select>
        {values.category === ExamCategory.OTHER && (
          <Heading6 className="mt-2 text-sm text-accent-shadow">
            Please describe the category in the description
          </Heading6>
        )}
        {errors.category && (
          <Paragraph className="text-sm text-red-500">
            {errors.category.toString()}
          </Paragraph>
        )}
      </article>
      <article className="relative">
        <div
          className={
            userPlan !== "PREMIUM" ? "pointer-events-none blur-sm" : ""
          }
        >
          <Field
            label="Pathname"
            inputProps={{
              placeholder: "Enter a pathname for your exam",
              value: values.pathname || "",
              onChange: (e) => setFieldValue("pathname", e.target.value),
              error: !!errors.pathname,
              disabled: userPlan !== "PREMIUM",
            }}
          />
        </div>
        {userPlan !== "PREMIUM" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PremiumBadge />
          </div>
        )}
      </article>
    </section>
  );
};
