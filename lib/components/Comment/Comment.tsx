import {
  FavoriteBorderOutlined,
  Grade,
  StarHalf,
  StarOutlineSharp,
} from "@mui/icons-material";
import { Button } from "../Button";
import ProfilePlaceholder from "../ProfilePlaceholder/ProfilePlaceholder";

const Comment = () => {
  return (
    <section className="space-y-2 mb-4" data-testid="comment">
      <article className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ProfilePlaceholder gender="male" />
          <span className="text-base font-medium leading-5">John Doe</span>
        </div>
        <span className="text-xs">3 days ago</span>
      </article>
      <article className="font-light">
        Lorem ipsum dolor sit amet consectetur. Est proin quisque venenatis
        faucibus dictumst. Vel augue scelerisque diam sed nulla fermentum ut
        scelerisque.
      </article>
      <article className="flex justify-between">
        <div>
          <p className="text-xs font-bold">Rating:</p>
          <div className="text-secondary-shadow">
            <Grade className="!h-5 !w-5" />
            <Grade className="!h-5 !w-5" />
            <Grade className="!h-5 !w-5" />
            <StarHalf className="!h-5 !w-5" />
            <StarOutlineSharp className="!h-5 !w-5" />
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
