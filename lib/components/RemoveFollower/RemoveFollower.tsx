import { Button } from "../Button";
import { Anchor, Heading4, Span } from "../FontFaces";

export interface RemoveFollowerProps {
  /**
   * The name of the follower to remove
   */
  followerName: string;
  /**
   * Callback function when user confirms the follower removal
   */
  onRemove: () => void;
  /**
   * Callback function when user cancels the follower removal
   */
  onCancel: () => void;
  /**
   * The href of the user to remove
   */
  userHref: string;
}

/**
 * A component that displays a confirmation dialog for removing a follower
 */
const RemoveFollower = ({
  followerName,
  onRemove,
  onCancel,
  userHref,
}: RemoveFollowerProps) => {
  return (
    <div className="space-y-6 p-4">
      <Heading4>Remove follower</Heading4>

      <Span className="block">
        Are you sure you want to remove{" "}
        <Anchor href={userHref} className="text-accent-shadow">
          {followerName}
        </Anchor>{" "}
        from your list of followers?
      </Span>

      <Span className="block">
        ExamSocial will not notify them about this action.
      </Span>

      <div className="flex justify-between gap-4">
        <Button theme="light" onClick={onCancel} rounded>
          No, cancel
        </Button>
        <Button theme="accent" onClick={onRemove} rounded>
          Yes, remove them
        </Button>
      </div>
    </div>
  );
};

export default RemoveFollower;
