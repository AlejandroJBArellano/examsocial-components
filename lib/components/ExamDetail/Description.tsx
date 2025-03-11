import { ReactNode, useState } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { FavoriteButton } from "../FavoriteButton";
import { FocusSpan } from "../FontFaces";
import { SaveButton } from "../SaveButton";

// Types
type MainContainerSize = "default" | "xl";

// Context
type MainContainerContextType = {
  size: MainContainerSize;
  isOpen: boolean;
  toggleOpen: () => void;
};

// Props for main component
export interface ExamDescriptionProps {
  description: string;
  onStartExam: () => void;
  onFavorite: () => void;
  onBookmark: () => void;
  className?: string;
  size?: MainContainerSize;
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

interface MainContainerActionProps {
  type: "favorite" | "bookmark";
  onClick?: () => void;
  className?: string;
  isFavorite?: boolean;
  isSaved?: boolean;
  tooltipText?: string;
}

interface MainContainerButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
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
  size = "default",
}: ExamDescriptionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded bg-primary-tint p-6",
        size === "xl" ? "xl:gap-6 xl:p-6" : "",
        className,
      )}
    >
      <MainContainerContext.Provider value={{ size, isOpen, toggleOpen }}>
        <ExamDescription.Description>{description}</ExamDescription.Description>
        <ExamDescription.Footer>
          <ExamDescription.Actions>
            <ExamDescription.Action
              type="favorite"
              onClick={onFavorite}
              tooltipText="Add to favorites"
            />
            <ExamDescription.Action
              type="bookmark"
              onClick={onBookmark}
              tooltipText="Bookmark exam"
            />
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
  const { isOpen, toggleOpen, size } = useMainContainerContext();

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
      <p
        className={cn(
          "text-base font-light leading-6",
          size === "xl" ? "xl:text-lg xl:leading-7" : "",
        )}
      >
        {shouldTruncate ? displayText : children}
      </p>
      {content.length > truncateAt && (
        <button
          onClick={toggleOpen}
          className={cn(
            "mt-1 self-start font-medium text-primary-shadow",
            size === "xl" ? "xl:text-lg" : "text-base",
          )}
        >
          {isOpen ? "Read less" : "Read more"}
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
  isFavorite = false,
  isSaved = false,
  tooltipText,
}: MainContainerActionProps) => {
  const { size } = useMainContainerContext();

  if (type === "favorite") {
    return (
      <FavoriteButton
        isFavorite={isFavorite}
        onFavoriteChange={onClick}
        size={size === "xl" ? "large" : "default"}
        tooltipText={tooltipText || "Add to favorites"}
        className={className}
      />
    );
  }

  return (
    <SaveButton
      isSaved={isSaved}
      onSaveChange={onClick}
      size={size === "xl" ? "large" : "default"}
      tooltipText={tooltipText || "Add to collection"}
      className={className}
    />
  );
};

const MainContainerButton = ({
  onClick,
  children,
  className,
}: MainContainerButtonProps) => {
  const { size } = useMainContainerContext();

  return (
    <Button
      onClick={onClick}
      theme="accent"
      rounded={false}
      className={cn(
        "font-medium",
        size === "xl" ? "xl:px-6 xl:py-2 xl:text-lg" : "px-4 py-2 text-base",
        className,
      )}
    >
      {children}
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
