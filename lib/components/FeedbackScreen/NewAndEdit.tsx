import { Formik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { FeedbackCondition } from "../../constants";
import { feedbackSchema } from "../../schemas";
import { Button } from "../Button";
import { FocusSpan, Heading4, Span } from "../FontFaces";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

const FeedbackConditionField = () => {
  const [container, setContainer] = useState<HTMLElement>();

  const formik = useFormikContext<Yup.InferType<typeof feedbackSchema>>();

  const FeedbackConditionNodes = {
    ALL: null,
    BETWEEN: (
      <div className="flex items-center gap-2">
        <Input
          placeholder="0"
          type="number"
          className="h-11 w-full"
          error={!!formik.errors.min}
          {...formik.getFieldProps("min")}
        />
        <Span>and</Span>
        <Input
          placeholder="100"
          type="number"
          className="h-11 w-full"
          error={!!formik.errors.max}
          {...formik.getFieldProps("max")}
        />
      </div>
    ),
    EQUAL_TO: (
      <Input
        placeholder="100"
        className="h-11 w-full"
        type="number"
        error={!!formik.errors.equal}
        {...formik.getFieldProps("equal")}
      />
    ),
    GREATER_THAN: (
      <Input
        placeholder="100"
        className="h-11 w-full"
        type="number"
        error={!!formik.errors.gt}
        {...formik.getFieldProps("gt")}
      />
    ),
    LESS_THAN: (
      <Input
        placeholder="100"
        className="h-11 w-full"
        type="number"
        error={!!formik.errors.lt}
        {...formik.getFieldProps("lt")}
      />
    ),
  };

  useEffect(() => {
    const containerDOM = document.getElementById("advanced-settings");
    if (containerDOM) {
      setContainer(containerDOM);
    }
  }, []);

  return (
    <article className="grid grid-cols-2 items-end gap-4">
      <div className="space-y-1">
        <label className="font-medium">Condition</label>
        <Select
          text={
            FeedbackCondition[
              formik.values.condition as keyof typeof FeedbackCondition
            ] || "Select one"
          }
          container={container}
        >
          {Object.entries(FeedbackCondition).map(([key, conditionValue]) => (
            <Select.Option
              key={key}
              checked={formik.values.condition === key}
              onClick={() => {
                console.log(key);
                formik.setFieldValue("condition", key);
              }}
            >
              {conditionValue}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        {
          FeedbackConditionNodes[
            formik.values.condition as keyof typeof FeedbackCondition
          ]
        }
      </div>
    </article>
  );
};

interface IFeedback {
  message: string;
  condition: string;
}

interface INewFeedbackScreen {
  onSubmit: (values: IFeedback) => void;
  onCancel: () => void;
}

export const NewFeedbackScreen = ({
  onSubmit,
  onCancel,
}: INewFeedbackScreen) => {
  return (
    <Formik
      initialValues={{
        message: "",
        condition: "ALL",
      }}
      onSubmit={onSubmit}
      validationSchema={feedbackSchema}
      validateOnChange
    >
      {(formik) => (
        <div className="bg-light space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <Heading4>Thank You Screen</Heading4>
          <section className="space-y-4">
            <article className="space-y-1">
              <FocusSpan>Message</FocusSpan>
              <Textarea
                className="w-full rounded-lg border p-2"
                placeholder="e.g., Congrats, you got a perfect score!"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={!!formik.errors.message}
              />
              {formik.errors.message && (
                <p className="text-feedback-error">{formik.errors.message}</p>
              )}
            </article>
            <FeedbackConditionField />
          </section>
          <div className="flex items-center justify-between">
            <Button rounded onClick={onCancel} type="button">
              Cancel
            </Button>
            <Button
              theme="accent"
              type="button"
              rounded
              onClick={async () => {
                await formik.submitForm();
                formik.resetForm();
              }}
              disabled={!formik.isValid}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};

interface IEditFeedbackScreen {
  feedback: IFeedback;
  onSubmit: (values: IFeedback) => void;
  onCancel: () => void;
}

export const EditFeedbackScreen = ({
  feedback,
  onSubmit,
  onCancel,
}: IEditFeedbackScreen) => {
  return (
    <Formik
      initialValues={feedback}
      onSubmit={onSubmit}
      validationSchema={feedbackSchema}
      validateOnChange
    >
      {(formik) => (
        <div className="bg-light space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <Heading4>Edit Thank You Screen</Heading4>
          <section className="space-y-4">
            <article className="space-y-1">
              <FocusSpan>Message</FocusSpan>
              <Textarea
                className="w-full rounded-lg border p-2"
                placeholder="e.g., Congrats, you got a perfect score!"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={!!formik.errors.message}
              />
              {formik.errors.message && (
                <p className="text-feedback-error">{formik.errors.message}</p>
              )}
            </article>
            <FeedbackConditionField />
          </section>
          <div className="flex items-center justify-between">
            <Button rounded onClick={onCancel} type="button">
              Cancel
            </Button>
            <Button
              theme="accent"
              type="button"
              rounded
              onClick={formik.submitForm}
              disabled={!formik.isValid}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
};
