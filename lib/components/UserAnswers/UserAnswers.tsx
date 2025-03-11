import { ReactNode } from "react";
import { Button } from "../Button";
import { Heading4 } from "../FontFaces";

export interface UserAnswersProps {
  /**
   * The name of the user whose answers are displayed
   */
  userName: string;

  /**
   * The children to be rendered in the grid layout
   */
  children: ReactNode;

  /**
   * Optional callback function when the close button is clicked
   */
  onClose?: () => void;
}

/**
 * UserAnswers component displays a user's answers in a responsive grid layout
 * with a header showing the user's name and a close button.
 */
const UserAnswers = ({ userName, children, onClose }: UserAnswersProps) => {
  return (
    <section className="space-y-8" aria-labelledby="user-answers-heading">
      <header className="flex items-center justify-between">
        <Heading4 id="user-answers-heading">{userName}'s Answers</Heading4>
        <Button.Icon
          theme="light"
          rounded
          size={24}
          onClick={onClose}
          aria-label="Close answers"
        >
          close
        </Button.Icon>
      </header>
      <main className="grid gap-x-6 gap-y-4 xl:grid-cols-2">{children}</main>
    </section>
  );
};

export default UserAnswers;
