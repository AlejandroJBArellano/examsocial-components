import { Delete, Edit, Timer } from "@mui/icons-material";
import React, { createContext, ReactNode, useContext } from "react";
import { cn } from "../../utils";
import { Button } from "../Button";
import { Anchor, Heading4, Heading5, Heading6, Paragraph } from "../FontFaces";

// Tipos para el contexto
type ExamCardSize = "default" | "md" | "sm";
type ExamCardContextType = {
  size: ExamCardSize;
};

// Contexto para compartir estado entre componentes
const ExamCardContext = createContext<ExamCardContextType>({
  size: "default",
});

// Hook para usar el contexto
const useExamCardContext = () => {
  const context = useContext(ExamCardContext);
  if (!context) {
    throw new Error(
      "ExamCard compound components must be used within an ExamCard",
    );
  }
  return context;
};

// Componente principal
interface ExamCardProps {
  children: ReactNode;
  className?: string;
  size?: ExamCardSize;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ExamCard = ({
  children,
  className,
  size = "default",
  onMouseEnter,
  onMouseLeave,
  ...props
}: ExamCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ExamCardContext.Provider value={{ size }}>
      <div
        className={cn(
          "transition-shadow duration-300 ease-in-out",
          size === "default" && "space-y-3",
          size === "md" && "flex flex-row gap-4 md:gap-5",
          size === "sm" && "flex flex-col gap-2",
          className,
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </div>
    </ExamCardContext.Provider>
  );
};

// Subcomponentes
interface ExamCardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ExamCardImage = ({ src, alt, className }: ExamCardImageProps) => {
  const { size } = useExamCardContext();

  return (
    <img
      className={cn(
        "rounded-lg border-2 border-black shadow-right-sm",
        size === "default" && "w-full",
        size === "md" &&
          "h-[72px] w-[128px] md:h-[72px] md:w-[128px] xl:h-[72px] xl:w-[128px] 2xl:h-[72px] 2xl:w-[128px]",
        size === "sm" &&
          "h-[75px] w-full md:h-[72px] md:w-[128px] xl:h-[72px] xl:w-[128px] 2xl:h-[72px] 2xl:w-[128px]",
        className,
      )}
      src={src}
      alt={alt}
    />
  );
};

interface ExamCardHeaderProps {
  children: ReactNode;
  className?: string;
}

const ExamCardHeader = ({ children, className }: ExamCardHeaderProps) => {
  const { size } = useExamCardContext();

  return (
    <div
      className={cn(
        size === "default" && "space-y-1",
        size === "md" && "flex flex-col",
        size === "sm" && "flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface ExamCardTitleProps {
  children: ReactNode;
  className?: string;
}

const ExamCardTitle = ({ children, className }: ExamCardTitleProps) => {
  const { size } = useExamCardContext();

  if (size === "default") {
    return (
      <div className={className}>
        <Heading4>{children}</Heading4>
      </div>
    );
  }

  if (size === "md") {
    return (
      <div className={className}>
        <Heading5>{children}</Heading5>
      </div>
    );
  }

  return (
    <div className={className}>
      <Heading6>{children}</Heading6>
    </div>
  );
};

interface ExamCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const ExamCardDescription = ({
  children,
  className,
}: ExamCardDescriptionProps) => {
  const { size } = useExamCardContext();

  return (
    <Paragraph
      className={cn(
        "line-clamp-3",
        size === "default" && "text-base",
        size === "md" && "text-base",
        size === "sm" && "text-sm",
        className,
      )}
    >
      {children}
    </Paragraph>
  );
};

interface ExamCardContentProps {
  children: ReactNode;
  className?: string;
}

const ExamCardContent = ({ children, className }: ExamCardContentProps) => {
  const { size } = useExamCardContext();

  return (
    <div
      className={cn(
        size === "default" && "space-y-3",
        size === "md" && "flex flex-col justify-between space-y-2",
        size === "sm" && "flex flex-col space-y-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface ExamCardFooterProps {
  children: ReactNode;
  className?: string;
}

const ExamCardFooter = ({ children, className }: ExamCardFooterProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
    </div>
  );
};

interface ExamCardTagProps {
  href?: string;
  children: ReactNode;
  className?: string;
}

const ExamCardTag = ({ href, children, className }: ExamCardTagProps) => {
  return (
    <Anchor className={cn("text-accent-shadow", className)} href={href}>
      {children}
    </Anchor>
  );
};

interface ExamCardTimeProps {
  children: ReactNode;
  className?: string;
}

const ExamCardTime = ({ children, className }: ExamCardTimeProps) => {
  return (
    <div
      className={cn("flex items-center gap-2 text-secondary-shadow", className)}
    >
      <Timer />
      <Heading6>{children}</Heading6>
    </div>
  );
};

interface ExamCardActionsProps {
  children: ReactNode;
  className?: string;
}

const ExamCardActions = ({ children, className }: ExamCardActionsProps) => {
  return <div className={cn("flex gap-4", className)}>{children}</div>;
};

interface ExamCardActionProps {
  onClick?: () => void;
  type: "edit" | "delete";
  className?: string;
}

const ExamCardAction = ({ onClick, type, className }: ExamCardActionProps) => {
  return (
    <Button
      onClick={onClick}
      theme={type === "edit" ? "light" : "feedback-error"}
      className={cn(
        "flex h-10 w-10 items-center justify-center transition-all xl:h-11 xl:w-11",
        className,
      )}
    >
      {type === "edit" && <Edit />}
      {type === "delete" && <Delete />}
    </Button>
  );
};

// Exportar componentes compuestos
ExamCard.Image = ExamCardImage;
ExamCard.Header = ExamCardHeader;
ExamCard.Title = ExamCardTitle;
ExamCard.Description = ExamCardDescription;
ExamCard.Content = ExamCardContent;
ExamCard.Footer = ExamCardFooter;
ExamCard.Tag = ExamCardTag;
ExamCard.Time = ExamCardTime;
ExamCard.Actions = ExamCardActions;
ExamCard.Action = ExamCardAction;

export default ExamCard;
