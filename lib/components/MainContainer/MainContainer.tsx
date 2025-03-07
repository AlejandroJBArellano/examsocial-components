import { ReactNode, useState } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { FavoriteButton } from "../FavoriteButton";
import { SaveButton } from "../SaveButton";

// Tipos para el componente
type MainContainerSize = "default" | "xl";

// Contexto para el componente
type MainContainerContextType = {
  size: MainContainerSize;
  isOpen: boolean;
  toggleOpen: () => void;
};

// Props para el componente principal
interface MainContainerProps {
  children: ReactNode;
  className?: string;
  size?: MainContainerSize;
}

// Props para los subcomponentes
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

// Componente principal
const MainContainer = ({
  children,
  className,
  size = "default",
  ...props
}: MainContainerProps) => {
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
      {...props}
    >
      <MainContainerContext.Provider value={{ size, isOpen, toggleOpen }}>
        {children}
      </MainContainerContext.Provider>
    </div>
  );
};

// Contexto
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

// Subcomponentes
const MainContainerDescription = ({
  children,
  className,
  truncateAt = 150,
}: MainContainerDescriptionProps) => {
  const { isOpen, toggleOpen, size } = useMainContainerContext();

  // Convertir children a string si es posible
  const content = typeof children === "string" ? children : "";

  // Determinar si el contenido debe truncarse
  const shouldTruncate = content.length > truncateAt && !isOpen;

  // Texto truncado o completo según el estado
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

// Asignar subcomponentes al componente principal
MainContainer.Description = MainContainerDescription;
MainContainer.Actions = MainContainerActions;
MainContainer.Action = MainContainerAction;
MainContainer.Button = MainContainerButton;
MainContainer.Footer = MainContainerFooter;

export default MainContainer;
