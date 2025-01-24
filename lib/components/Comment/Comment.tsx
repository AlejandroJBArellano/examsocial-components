import { Grade, Star, StarHalf } from "@mui/icons-material";

const Comment = () => {
  return (
    <section className="space-y-2 mb-4" data-testid="comment">
      <article className="flex justify-between items-center">
        <div>
          <div className="w-[22px] h-[22px]" />
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
            <Grade />
            <Grade />
            <Grade />
            <StarHalf />
            <Star />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Comment;
