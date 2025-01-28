import {
  FavoriteBorderOutlined,
  Grade,
  StarHalf,
  StarOutlineSharp,
} from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
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
    <section className="space-y-2 mb-4" data-testid="comment">
      <article className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="avatar"
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <span className="w-6 h-6">
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
          <div className="text-secondary-shadow flex">
            {[...Array(5)].map((_, index) => {
              if (rating >= index + 1) {
                return <Grade key={index} className="!h-5 !w-5" />;
              } else if (rating > index && rating < index + 1) {
                return <StarHalf key={index} className="!h-5 !w-5" />;
              } else {
                return <StarOutlineSharp key={index} className="!h-5 !w-5" />;
              }
            })}
          </div>
        </div>
        <Button rounded theme="light">
          <FavoriteBorderOutlined />
        </Button>
      </article>
    </section>
  );
};

export default Comment;
