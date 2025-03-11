import { PropsWithChildren } from "react";
import { Heading3, Heading5 } from "../FontFaces";

export interface ParticipantProps extends PropsWithChildren {
  /**
   * The participant's name
   */
  name: string;
  /**
   * URL to the participant's avatar image
   */
  avatar?: string;
  /**
   * Score in format "achieved/total" (e.g., "15/25")
   */
  score?: string;
  /**
   * Optional additional className for styling
   */
  className?: string;
  /**
   * Optional click handler for the participant
   */
  onClick?: () => void;
}

/**
 * Participant component to display individual participant information
 */
export const Participant = ({
  name,
  avatar = "https://picsum.photos/48",
  score,
  children,
  className = "",
  onClick,
}: ParticipantProps) => (
  <div
    className={`flex items-center gap-6 py-4 ${className} ${onClick ? "cursor-pointer" : ""}`}
    onClick={onClick}
    data-testid="participant"
  >
    <img
      src={avatar}
      alt={`${name}'s avatar`}
      className="h-12 w-12 rounded-full"
    />
    <Heading5 className="flex-1">{name}</Heading5>
    {score && <Heading3 className="text-feedback-success">{score}</Heading3>}
    {children}
  </div>
);

export interface ParticipantsProps extends PropsWithChildren {
  /**
   * Title for the participants section
   */
  title?: string;
  /**
   * Optional additional className for styling
   */
  className?: string;
}

/**
 * Participants component to display a list of participants
 */
const Participants = ({
  title = "Participants",
  children,
  className = "",
}: ParticipantsProps) => {
  return (
    <section
      className={`space-y-8 rounded-md border-sm border-black p-8 shadow-right ${className}`}
      data-testid="participants-container"
    >
      <Heading3>{title}</Heading3>
      <div className="w-full divide-y-sm divide-black">{children}</div>
    </section>
  );
};

// Create compound component
Participants.Participant = Participant;

export default Participants;
