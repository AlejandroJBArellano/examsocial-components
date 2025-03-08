import { formatDistanceToNow } from "date-fns";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import ProfilePlaceholder from "../ProfilePlaceholder/ProfilePlaceholder";

interface ICommentProps {
  user: {
    name: string;
    avatar: string;
  };
  createdAt: Date;
  rating: number;
}

const Comment = ({
  user,
  createdAt,
  rating,
  children,
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

          <span className="text-base font-medium leading-5">{user.name}</span>
        </div>
        <span className="text-xs">{timeAgo}</span>
      </article>
      <article className="font-light">{children}</article>
      <article className="flex justify-between">
        <div>
          <p className="text-xs font-bold">Rating:</p>
          <div className="flex text-secondary-shadow">
            {[...Array(5)].map((_, index) => {
              if (rating >= index + 1) {
                return <Icon name="grade" key={index} className="!h-5 !w-5" />;
              } else if (rating > index && rating < index + 1) {
                return (
                  <Icon name="star_half" key={index} className="!h-5 !w-5" />
                );
              } else {
                return (
                  <Icon name="star_outline" key={index} className="!h-5 !w-5" />
                );
              }
            })}
          </div>
        </div>
        <Button rounded theme="light">
          <Icon name="favorite_border" />
        </Button>
      </article>
    </section>
  );
};

export default Comment;
