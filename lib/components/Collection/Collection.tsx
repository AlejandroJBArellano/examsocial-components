import { FormikProps } from "formik";
import React, { PropsWithChildren } from "react";
import { Field } from "../Field";
import { Heading5 } from "../FontFaces";
import { Icon } from "../Icon";
import { DeleteCollection } from "./DeleteCollection";
import { EditCollection } from "./EditCollection";
import { NewCollection } from "./NewCollection";

// Add subcomponent
interface AddProps extends PropsWithChildren {
  onClick?: () => void;
}

const Add: React.FC<AddProps> = ({ children, onClick }) => {
  return (
    <button
      className="flex w-full items-center justify-between border-b-sm border-gray-300 pb-4"
      onClick={onClick}
    >
      <Heading5>{children}</Heading5>
      <Icon name="add" size={24} />
    </button>
  );
};

// Use a more specific type that matches the actual structure
type CollectionFormValues = {
  name: string;
  _id: string;
  description: string;
  private: boolean;
};

const CollectionForm = ({
  values,
  handleChange,
  errors,
  setFieldValue,
}: FormikProps<CollectionFormValues>) => {
  return (
    <section className="space-y-4">
      <Field
        label="Name"
        inputProps={{
          name: "name",
          placeholder: "e.g. Pop Culture",
          value: values.name,
          onChange: handleChange,
        }}
        error={errors.name}
      />

      <Field.Textarea
        label="Description"
        textareaProps={{
          name: "description",
          placeholder: "Describe what this collection is for",
          value: values.description || "",
          onChange: handleChange,
        }}
        error={errors.description}
      />

      <Field.Switch
        onCheckedChange={(checked) => {
          setFieldValue("private", checked);
        }}
        checked={values.private}
      >
        Private collection
      </Field.Switch>
    </section>
  );
};

// Main Collection componen

const Collection: React.FC<PropsWithChildren> & {
  Add: typeof Add;
  Edit: typeof EditCollection;
  New: typeof NewCollection;
  Form: typeof CollectionForm;
  Delete: typeof DeleteCollection;
} = ({ children }) => {
  return <div>{children}</div>;
};

// Attach Add as a subcomponent
Collection.Add = Add;
Collection.Form = CollectionForm;
Collection.Edit = EditCollection;
Collection.New = NewCollection;
Collection.Delete = DeleteCollection;

export default Collection;

export { CollectionForm };
