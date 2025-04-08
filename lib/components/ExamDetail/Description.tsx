import { cn } from "@/utils";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";
import { Button } from "../Button";
import { FocusParagraph, FocusSpan, Paragraph } from "../FontFaces";

// Context
type MainContainerContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
};

// Props for main component
export interface ExamDescriptionProps {
  description?: string;
  onStartExam: () => void;
  onFavorite: () => void;
  onBookmark: () => void;
  className?: string;
  favorite?: boolean;
  saved?: boolean;
}

// Props for subcomponents
interface MainContainerDescriptionProps {
  children: ReactNode;
  className?: string;
  truncateAt?: number;
}

interface MainContainerActionsProps {
  children: ReactNode;
  className?: string;
}

interface MainContainerActionProps extends PropsWithChildren {
  type: "favorite" | "bookmark";
  onClick?: () => void;
  className?: string;
  favorite?: boolean;
  saved?: boolean;
  tooltipText?: string;
}

// Context creation
import { createContext, useContext } from "react";

const MainContainerContext = createContext<
  MainContainerContextType | undefined
>(undefined);

const useMainContainerContext = () => {
  const context = useContext(MainContainerContext);
  if (!context) {
    throw new Error(
      "MainContainer compound components must be used within MainContainer",
    );
  }
  return context;
};

// Main component
const ExamDescription = ({
  description,
  onStartExam,
  onFavorite,
  onBookmark,
  className,
  favorite,
  saved,
}: ExamDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("space-y-6 bg-primary-tint p-6", className)}>
      <MainContainerContext.Provider value={{ isOpen, toggleOpen }}>
        {description && (
          <ExamDescription.Description>
            {description}
          </ExamDescription.Description>
        )}
        <ExamDescription.Footer>
          <ExamDescription.Actions>
            <ExamDescription.Action
              type="favorite"
              onClick={onFavorite}
              tooltipText="Add to favorites"
              favorite={favorite}
            >
              {favorite
                ? "Remove from favorites"
                : "Mark this exam as one of your favorites"}
            </ExamDescription.Action>
            <ExamDescription.Action
              type="bookmark"
              onClick={onBookmark}
              tooltipText="Bookmark exam"
              saved={saved}
            >
              {saved
                ? "Remove from collections"
                : "Bookmark exam into one of your collections"}
            </ExamDescription.Action>
          </ExamDescription.Actions>
          <ExamDescription.Button onClick={onStartExam}>
            <FocusSpan>Start exam</FocusSpan>
          </ExamDescription.Button>
        </ExamDescription.Footer>
      </MainContainerContext.Provider>
    </div>
  );
};

// Subcomponents
const MainContainerDescription = ({
  children,
  className,
  truncateAt = 150,
}: MainContainerDescriptionProps) => {
  const { isOpen, toggleOpen } = useMainContainerContext();

  // Convert children to string if possible
  const content = typeof children === "string" ? children : "";

  // Determine if content should be truncated
  const shouldTruncate = content.length > truncateAt && !isOpen;

  // Truncated or complete text based on state
  const displayText = shouldTruncate
    ? `${content.substring(0, truncateAt)}...`
    : content;

  return (
    <div className={cn("flex flex-col", className)}>
      <Paragraph>{shouldTruncate ? displayText : children}</Paragraph>
      {content.length > truncateAt && (
        <button
          onClick={toggleOpen}
          className={cn("mt-1 self-start text-primary-shadow")}
        >
          <FocusParagraph>{isOpen ? "Read less" : "Read more"}</FocusParagraph>
        </button>
      )}
    </div>
  );
};

const MainContainerActions = ({
  children,
  className,
}: MainContainerActionsProps) => {
  return <div className={cn("flex gap-3", className)}>{children}</div>;
};

const MainContainerAction = ({
  type,
  onClick,
  className,
  favorite = false,
  saved = false,
  children,
}: MainContainerActionProps) => {
  return (
    <Button.Action
      onClick={onClick}
      className={className}
      {...(type === "bookmark"
        ? {
            name: "bookmark",
            selected: saved,
          }
        : {
            name: "favorite",
            selected: favorite,
          })}
    >
      {children}
    </Button.Action>
  );
};

const MainContainerButton = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <Button theme="accent" {...props}>
      <FocusSpan>{children}</FocusSpan>
    </Button>
  );
};

const MainContainerFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
    </div>
  );
};

// Assign subcomponents to main component
ExamDescription.Description = MainContainerDescription;
ExamDescription.Actions = MainContainerActions;
ExamDescription.Action = MainContainerAction;
ExamDescription.Button = MainContainerButton;
ExamDescription.Footer = MainContainerFooter;

export default ExamDescription;
