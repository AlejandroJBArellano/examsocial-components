import { useFormik, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { FeedbackCondition } from "../../constants";
import { feedbackSchema } from "../../schemas";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { Textarea } from "../Textarea";

const FeedbackConditionField = () => {
  const [container, setContainer] = useState<HTMLElement>();

  const formik = useFormikContext<Yup.InferType<typeof feedbackSchema>>();

  const FeedbackConditionNodes = {
    [FeedbackCondition.ALL]: null,
    [FeedbackCondition.BETWEEN]: (
      <div className="flex items-center gap-2">
        <Input
          placeholder="0"
          type="number"
          className="w-full h-11"
          {...formik.getFieldProps("min")}
        />
        <span className="text-lg leading-6">and</span>
        <Input
          placeholder="100"
          type="number"
          className="w-full h-11"
          {...formik.getFieldProps("max")}
        />
      </div>
    ),
    [FeedbackCondition.EQUAL_TO]: (
      <Input
        placeholder="100"
        className="w-full h-11"
        type="number"
        {...formik.getFieldProps("equal")}
      />
    ),
    [FeedbackCondition.GREATER_THAN]: (
      <Input
        placeholder="100"
        className="w-full h-11"
        type="number"
        {...formik.getFieldProps("gt")}
      />
    ),
    [FeedbackCondition.LESS_THAN]: (
      <Input
        placeholder="100"
        className="w-full h-11"
        type="number"
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
    <article className="grid grid-cols-2 gap-4 items-end">
      <div className="space-y-1">
        <label className="font-medium">Condition</label>
        <Select
          text={formik.values.condition || "Select one"}
          container={container}
        >
          {Object.entries(FeedbackCondition).map(([key, conditionValue]) => (
            <Select.Option
              key={key}
              checked={formik.values.condition === conditionValue}
              onClick={() => formik.setFieldValue("condition", conditionValue)}
            >
              {conditionValue}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>{FeedbackConditionNodes[formik.values.condition]}</div>
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

const NewFeedbackScreen = ({ onSubmit, onCancel }: INewFeedbackScreen) => {
  const formik = useFormik({
    initialValues: {
      message: "",
      condition: FeedbackCondition.ALL,
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: feedbackSchema,
  });

  return (
    <div className="p-4 border rounded-lg shadow-right-sm shadow-black border-black space-y-6">
      <h4 className="text-2xl leading-7 tracking-[0.48px] font-medium sentient">
        Thank You Screen
      </h4>
      <section className="space-y-4">
        <article className="space-y-1">
          <label className="block font-medium leading-5">Message</label>
          <Textarea
            className="w-full p-2 border rounded-lg"
            placeholder="e.g., Congrats, you got a perfect score!"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </article>
        <FeedbackConditionField />
      </section>
      <div className="flex justify-between items-center">
        <Button rounded onClick={onCancel}>
          Cancel
        </Button>
        <Button theme="accent" rounded onClick={formik.submitForm}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default NewFeedbackScreen;
