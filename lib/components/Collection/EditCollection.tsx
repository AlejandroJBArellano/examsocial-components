import { Form, Formik } from "formik";
import { collectionSchema } from "../../schemas";
import { CollectionType } from "../../types";
import { Button } from "../Button";
import { Heading4 } from "../FontFaces";
import { CollectionForm } from "./Collection";

interface IEditCollection {
  onSubmit: (values: CollectionType) => void;
  onCancel: () => void;
  collection: CollectionType;
  isOpen: boolean;
}

export const EditCollection = ({
  onSubmit,
  onCancel,
  collection,
  isOpen,
}: IEditCollection) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        name: collection.name,
        id: collection.id,
        description: collection.description ?? "",
        private: collection.private || false,
      }}
      validationSchema={collectionSchema}
      validateOnChange
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(formik) => (
        <Form className="space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <Heading4>Edit Collection</Heading4>
          <CollectionForm {...formik} />
          <section className="flex items-center justify-between">
            <Button
              type="button"
              theme="light"
              rounded
              onClick={() => {
                formik.resetForm();
                onCancel();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              rounded
              theme="accent"
              disabled={!formik.isValid}
              onClick={() => {
                if (formik.isValid) {
                  onSubmit(formik.values);
                  formik.resetForm();
                }
              }}
            >
              Save
            </Button>
          </section>
        </Form>
      )}
    </Formik>
  );
};
