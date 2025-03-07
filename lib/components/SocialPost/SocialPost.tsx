import React, { createContext, ReactNode, useContext } from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { cn } from "../../utils";
import { ExamCard } from "../ExamCard";
import { FocusSmoll, Smoll } from "../FontFaces";
import { ProfilePlaceholder } from "../ProfilePlaceholder";
import Review from "./Review";

// Tipos para el contexto
type SocialPostType = "examCreated" | "review" | "favoriteSaved";
type SocialPostContextType = {
  type: SocialPostType;
};

// Contexto para compartir estado entre componentes
const SocialPostContext = createContext<SocialPostContextType>({
  type: "examCreated",
});

// Hook para usar el contexto
const useSocialPostContext = () => {
  const context = useContext(SocialPostContext);
  if (!context) {
    throw new Error(
      "SocialPost compound components must be used within a SocialPost",
    );
  }
  return context;
};

// Interfaces para los props
export interface SocialPostProps {
  children: ReactNode;
  type?: SocialPostType;
  className?: string;
}

export interface SocialPostHeaderProps {
  username: string;
  timestamp: string;
  gender?: "male" | "female";
  mainAction?: string;
  secondaryAction?: string;
  showStars?: boolean;
  className?: string;
}

export interface SocialPostExamCardProps {
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export interface SocialPostReviewProps {
  content: string;
  exam: {
    title: string;
    image: string;
  };
  className?: string;
}

export interface SocialPostFavoriteSavedProps {
  collectionName: string;
  image: string;
  title: string;
  className?: string;
}

// Componente principal
const SocialPost = ({
  children,
  type = "examCreated",
  className,
  ...props
}: SocialPostProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SocialPostContext.Provider value={{ type }}>
      <article
        className={cn(
          "flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm",
          className,
        )}
        {...props}
      >
        {children}
      </article>
    </SocialPostContext.Provider>
  );
};

// Subcomponente: Header
const SocialPostHeader = ({
  username,
  timestamp,
  gender = "male",
  mainAction,
  secondaryAction,
  showStars = false,
  className,
}: SocialPostHeaderProps) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <div className="size-9">
        <ProfilePlaceholder gender={gender} />
      </div>
      <div className="flex flex-col gap-1">
        <FocusSmoll className="block">{username}</FocusSmoll>
        <div className="flex items-center gap-1 text-zinc-500">
          {mainAction && <Smoll>{mainAction}</Smoll>}

          {showStars && (
            <div className="flex items-center text-amber-500">
              <MaterialSymbol icon="grade" size={12} />
              <MaterialSymbol icon="grade" size={12} />
              <MaterialSymbol icon="grade" size={12} />
              <MaterialSymbol icon="grade" size={12} />
              <MaterialSymbol icon="star_half" size={12} />
            </div>
          )}

          {secondaryAction && <Smoll>{secondaryAction}</Smoll>}

          <Smoll className="ml-auto">{timestamp}</Smoll>
        </div>
      </div>
    </div>
  );
};

// Subcomponente: ExamCardContent
const SocialPostExamCardContent = ({
  title,
  description,
  image,
  className,
}: SocialPostExamCardProps) => {
  const { type } = useSocialPostContext();

  if (type !== "examCreated") return null;

  return (
    <ExamCard className={className}>
      <ExamCard.Header>
        {image && <ExamCard.Image src={image} alt={title} />}
        <ExamCard.Title>{title}</ExamCard.Title>
      </ExamCard.Header>
      {description && (
        <ExamCard.Description>{description}</ExamCard.Description>
      )}
    </ExamCard>
  );
};

// Subcomponente: ReviewContent
const SocialPostReviewContent = ({
  content,
  exam,
  className,
}: SocialPostReviewProps) => {
  const { type } = useSocialPostContext();

  if (type !== "review") return null;

  // Aquí usamos el componente Review existente, pero no podemos pasar className
  // ya que el componente Review no acepta ese prop
  return (
    <div className={className}>
      <Review exam={exam} />
    </div>
  );
};

// Subcomponente: FavoriteSavedContent
const SocialPostFavoriteSavedContent = ({
  collectionName,
  image,
  title,
  className,
}: SocialPostFavoriteSavedProps) => {
  const { type } = useSocialPostContext();

  if (type !== "favoriteSaved") return null;

  return (
    <div className={cn("flex gap-4", className)}>
      <img
        src={image}
        alt={title}
        className="h-10 w-[72px] rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <Smoll className="text-zinc-500">Saved in</Smoll>
          <FocusSmoll className="text-accent">{collectionName}</FocusSmoll>
          <MaterialSymbol icon="favorite" size={16} className="text-accent" />
        </div>
        <FocusSmoll>{title}</FocusSmoll>
      </div>
    </div>
  );
};

// Asignar subcomponentes al componente principal
SocialPost.Header = SocialPostHeader;
SocialPost.ExamCard = SocialPostExamCardContent;
SocialPost.Review = SocialPostReviewContent;
SocialPost.FavoriteSaved = SocialPostFavoriteSavedContent;

export default SocialPost;
