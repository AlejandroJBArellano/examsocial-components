import { Button } from "../Button";
import { FocusParagraph, Heading4, Paragraph } from "../FontFaces";

interface DeleteCollectionProps {
  /**
   * Number of exams in the collection
   */
  examCount: number;

  /**
   * Callback function when user cancels deletion
   */
  onCancel: () => void;

  /**
   * Callback function when user confirms deletion
   */
  onAccept: () => void;
}

/**
 * A confirmation dialog component for deleting a collection.
 * Shows a warning message with the number of exams that will be deleted.
 */
export const DeleteCollection: React.FC<DeleteCollectionProps> = ({
  examCount,
  onCancel,
  onAccept,
}) => {
  return (
    <div className="space-y-6 p-6">
      <Heading4 className="text-feedback-error">
        Are you sure you want to delete this collection?
      </Heading4>

      <div className="space-y-2">
        <Paragraph className="font-medium">This collection includes</Paragraph>
        <FocusParagraph>
          {examCount} {examCount === 1 ? "exam" : "exams"}
        </FocusParagraph>
        <Paragraph>
          If you delete this collection, you will lose all those saved exams and
          people following your collection will no longer have access to it.
        </Paragraph>
      </div>

      <div className="flex justify-between gap-4">
        <Button rounded theme="light" onClick={onCancel}>
          No, cancel
        </Button>

        <Button rounded theme="feedback-error" onClick={onAccept}>
          Yes, delete
        </Button>
      </div>
    </div>
  );
};
