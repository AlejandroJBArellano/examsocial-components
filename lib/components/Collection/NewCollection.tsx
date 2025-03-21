import { Form, Formik } from "formik";
import { collectionSchema } from "../../schemas";
import { Collection } from "../../types";
import { Button } from "../Button";
import { Heading4 } from "../FontFaces";
import { CollectionForm } from "./Collection";

interface INewCollection {
  onSubmit: (values: Collection) => void;
  onCancel: () => void;
}

export const NewCollection = ({ onSubmit, onCancel }: INewCollection) => {
  return (
    <Formik
      initialValues={{
        name: "",
        _id: `temp-${Date.now()}`,
        description: "",
        private: false,
      }}
      validationSchema={collectionSchema}
      validateOnChange
      onSubmit={onSubmit}
      validateOnBlur
    >
      {(formik) => (
        <Form className="space-y-6 rounded-lg border border-black p-4 shadow-right shadow-black md:space-y-7 md:p-6 lg:space-y-8 lg:p-7 xl:space-y-9 xl:p-8">
          <Heading4>New Collection</Heading4>
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
              Create
            </Button>
          </section>
        </Form>
      )}
    </Formik>
  );
};
