import { formatDistanceToNow } from "date-fns";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { FocusSmoll, FocusSpan, Paragraph, Smoll } from "../FontFaces";
import { Icon } from "../Icon";
import ProfilePlaceholder from "../ProfilePlaceholder/ProfilePlaceholder";

interface ICommentProps {
  user: {
    name: string;
    avatar: string;
  };
  createdAt: Date;
  rating: number;
  liked?: boolean;
}

const Comment = ({
  user,
  createdAt,
  rating,
  children,
  liked,
}: PropsWithChildren<ICommentProps>) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return (
    <section className="mb-4 space-y-2" data-testid="comment">
      <article className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="avatar"
              className="h-6 w-6 rounded-full"
            />
          ) : (
            <span className="h-6 w-6">
              <ProfilePlaceholder gender="male" />
            </span>
          )}

          <FocusSpan className="text-base font-medium leading-5">
            {user.name}
          </FocusSpan>
        </div>
        <Smoll>{timeAgo}</Smoll>
      </article>
      <Paragraph className="font-light">{children}</Paragraph>
      <article className="flex items-center justify-between">
        <div>
          <FocusSmoll>Rating:</FocusSmoll>
          <div className="flex text-secondary-shadow">
            {[...Array(5)].map((_, index) => {
              if (rating >= index + 1) {
                return <Icon name="grade" key={index} size={20} />;
              } else if (rating > index && rating < index + 1) {
                return <Icon name="star_half" key={index} size={20} />;
              } else {
                return <Icon name="star_outline" key={index} size={20} />;
              }
            })}
          </div>
        </div>
        <Button.Icon rounded theme={liked ? "accent" : "light"} size={20}>
          favorite_border
        </Button.Icon>
      </article>
    </section>
  );
};

export default Comment;
