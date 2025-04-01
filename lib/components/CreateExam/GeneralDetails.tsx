import { Currency } from "@/constants";
import { useExamCreation } from "@/hooks/exam";
import { CategoryMetadata, ExamCategory } from "@/types";
import { cn } from "@/utils";
import { useFormikContext } from "formik";
import { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { examSchema } from "../../schemas";
import { PremiumBadge } from "../Badges";
import { BannerInput } from "../BannerInput";
import { Field } from "../Field";
import {
  FocusSpan,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Span,
} from "../FontFaces";
import { Helper } from "../Helper";
import { Icon } from "../Icon";
import { ImageUploader } from "../ImageUploader";
import { Input } from "../Input";
import { Select } from "../Select";

export const GeneralDetails = () => {
  const [validating, setValidating] = useState(false);
  const [valid, setValid] = useState(false);

  const { getFieldProps, values, setFieldValue, errors, touched } =
    useFormikContext<Yup.InferType<typeof examSchema>>();

  const { userPlan, validatePathname, canSellExams } = useExamCreation();

  const validate = useCallback(async () => {
    if (!values.pathname) return;
    setValidating(true);
    const isValid = await validatePathname(values.pathname!);
    setValid(() => isValid);
    setValidating(false);
  }, [validatePathname, values.pathname, setValidating, setValid]);

  useEffect(() => {
    validate();
  }, [validate]);

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
      <Field.Textarea
        label="Description"
        error={errors.description?.toString()}
        textareaProps={{
          placeholder: "A brief description of your exam",
          className: "w-full",
          ...getFieldProps("description"),
        }}
      />
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
            error={errors.pathname?.toString()}
          />
          {validating && (
            <div className="mt-1 flex items-center gap-1.5 text-accent-shadow">
              <Icon name="refresh" size={18} className="animate-spin" />
              <Span>Validating pathname...</Span>
            </div>
          )}
          {valid && !validating && touched.pathname ? (
            <div className="text-accent-success mt-1 flex items-center gap-1.5">
              <Icon name="check" size={18} />
              <Span>Pathname is valid</Span>
            </div>
          ) : (
            <div className="text-accent-error mt-1 flex items-center gap-1.5">
              <Icon name="close" size={18} />
              <Span>Pathname is invalid</Span>
            </div>
          )}
          {userPlan !== "PREMIUM" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <PremiumBadge />
            </div>
          )}
        </div>
      </article>
      <article className="space-y-4 border-t border-secondary-tint py-4">
        <section className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2">
            <Heading5>Monetization</Heading5>
            <Helper align="center" side="top">
              Monetization is the process of charging students for taking exams.
            </Helper>
          </div>
          {!canSellExams && (
            <div className="flex items-center gap-2 rounded-md bg-feedback-warning px-3 py-2 text-feedback-warning-tint">
              <Icon className="text-feedback-warning-tint" name="info" filled />
              <FocusSpan>Register into the marketplace section</FocusSpan>
            </div>
          )}
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <FocusSpan>Currency</FocusSpan>
          <Select
            text={Currency[values.currency as keyof typeof Currency]}
            disabled={!canSellExams}
          >
            {Object.entries(Currency).map(([key, value]) => (
              <Select.Option
                key={key}
                onClick={() => {
                  setFieldValue(
                    "advancedSettings.currency",
                    key as keyof typeof Currency,
                  );
                }}
                disabled={!canSellExams}
                checked={values.currency === key}
              >
                {value}
              </Select.Option>
            ))}
          </Select>
        </section>
        <section
          className={cn("grid grid-cols-1 items-center gap-2 sm:grid-cols-2", {
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <label htmlFor="price" className="flex items-center gap-2">
            <FocusSpan>Price</FocusSpan>
            <Helper align="center" side="top">
              Price is the amount a student has to pay to attempt the exam.
            </Helper>
          </label>
          <Input
            id="price"
            type="number"
            placeholder="0"
            className="w-full"
            disabled={!canSellExams}
            {...getFieldProps("price")}
          />
        </section>
      </article>
    </section>
  );
};
