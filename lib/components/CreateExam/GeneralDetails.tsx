import { Currency } from "@/constants";
import { useExamCreation } from "@/hooks/exam";
import { CategoryMetadata, Exam, ExamCategory, ThemeSetting } from "@/types";
import { cn } from "@/utils";
import { useFormikContext } from "formik";
import { useCallback, useEffect, useState } from "react";
import { PremiumBadge } from "../Badges";
import { BannerInput } from "../BannerInput";
import { Field } from "../Field";
import { FocusSpan, Heading4, Heading5, Heading6, Span } from "../FontFaces";
import { Helper } from "../Helper";
import { Icon } from "../Icon";
import { ImageUploader } from "../ImageUploader";
import { Select } from "../Select";
import { ComingSoonWrapper } from "../Wrapper";
import { ThemeSettings } from "./ThemeSettings";

export const GeneralDetails = () => {
  const [validating, setValidating] = useState(false);
  const [valid, setValid] = useState(false);

  const { getFieldProps, values, setFieldValue, errors, touched } =
    useFormikContext<Exam>();

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
          <Span className="text-feedback-error">{errors.image.toString()}</Span>
        )}
        <Span className="flex items-center gap-1 text-feedback-error">
          <Icon name="info" size={20} className="text-feedback-error" />
          Recommended: Upload a 16:9 image for optimal display across all
          devices
        </Span>
      </article>
      <Field
        label="Title"
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
        <Field.Select
          label="Categories"
          error={errors.categories?.toString()}
          selectProps={{
            error: !!errors.categories,
            text:
              values.categories?.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {values.categories.map((category) => (
                    <div key={category} className="flex items-center gap-1">
                      <Icon
                        name={CategoryMetadata[category as ExamCategory].icon}
                        size={18}
                        filled
                      />
                      {CategoryMetadata[category as ExamCategory].displayName}
                    </div>
                  ))}
                </div>
              ) : (
                "Select a category"
              ),
          }}
        >
          {Object.entries(ExamCategory).map(([key, value]) => (
            <Select.Option
              key={key}
              onClick={() => {
                if (values.categories.includes(value)) {
                  setFieldValue(
                    "categories",
                    values.categories.filter((c) => c !== value),
                  );
                } else {
                  setFieldValue("categories", [...values.categories, value]);
                }
              }}
              checked={values.categories?.includes(value)}
            >
              <div className="flex items-center gap-2">
                <Icon name={CategoryMetadata[value].icon} size={18} filled />
                {CategoryMetadata[value].displayName}
              </div>
            </Select.Option>
          ))}
        </Field.Select>
        {values.categories?.includes(ExamCategory.OTHER) && (
          <Heading6 className="mt-2 text-sm text-accent-shadow">
            Please describe the category in the description
          </Heading6>
        )}
      </article>
      <ComingSoonWrapper badgeSize="big">
        <article>
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
        </article>
      </ComingSoonWrapper>
      <article className="grid gap-4 border-t border-secondary-tint py-4 sm:grid-cols-2">
        <section className="flex flex-col items-start justify-between gap-2 sm:col-span-2 sm:flex-row sm:items-center">
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
          className={cn({
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <Field.Select
            label="Currency"
            selectProps={{
              text: Currency[
                values.marketplaceSettings.currency as keyof typeof Currency
              ],
              disabled: !canSellExams,
            }}
          >
            {Object.entries(Currency).map(([key, value]) => (
              <Select.Option
                key={key}
                onClick={() => {
                  setFieldValue(
                    "marketplaceSettings.currency",
                    key as keyof typeof Currency,
                  );
                }}
                disabled={!canSellExams}
                checked={values.marketplaceSettings.currency === key}
              >
                {value}
              </Select.Option>
            ))}
          </Field.Select>
        </section>
        <section
          className={cn({
            "cursor-not-allowed select-none blur-sm": !canSellExams,
          })}
        >
          <Field
            label={
              <div className="flex items-center gap-2">
                <FocusSpan>Price</FocusSpan>
                <Helper align="center" side="top">
                  Price is the amount a student has to pay to attempt the exam.
                </Helper>
              </div>
            }
            inputProps={{
              id: "marketplaceSettings.price",
              type: "number",
              placeholder: "0",
              className: "w-full",
              disabled: !canSellExams,
              ...getFieldProps("marketplaceSettings.price"),
            }}
          />
        </section>
      </article>
      <article className="border-t border-secondary-tint py-4">
        <ThemeSettings
          theme={values.theme as ThemeSetting}
          onChange={(theme) => {
            setFieldValue("theme", theme);
          }}
        />
      </article>
    </section>
  );
};
