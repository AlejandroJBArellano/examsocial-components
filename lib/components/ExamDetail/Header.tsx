import { Anchor, Heading3, Heading5, Heading6 } from "../FontFaces";
import { Icon } from "../Icon";
import BannerExam from "./Banner";

const HeaderExam = () => {
  return (
    <div className="space-y-6 bg-secondary-tint p-6">
      <BannerExam />
      <div className="space-y-3">
        <Heading3>Svelte Fundamentals</Heading3>
        <div className="flex justify-between">
          <Anchor className="text-accent-shadow" href="/profile">
            John Doe
          </Anchor>
          <Anchor className="text-accent-shadow" href="/profile">
            Svelte
          </Anchor>
          <div className="flex items-center gap-2">
            <Heading6>391</Heading6>
            {/* <PersonCheck className="!size-8" /> */}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-secondary-shadow">
            <Icon name="timer" className="!size-8" />
            <Heading3>2 hours</Heading3>
          </div>
          <div className="flex items-center gap-1">
            <Heading5>4.9</Heading5>
            <Icon name="grade" className="!size-8 text-extra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderExam;
