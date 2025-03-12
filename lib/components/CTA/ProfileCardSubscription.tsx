import { Button } from "../Button";
import { FocusSpan, Heading4 } from "../FontFaces";
import { Icon } from "../Icon";
import { Feature, FeaturesCarousel } from "./";

interface ProfileCardSubscriptionProps {
  features: Feature[];
  onSubscribe: () => void;
}

const ProfileCardSubscription = ({
  features,
  onSubscribe,
}: ProfileCardSubscriptionProps) => {
  return (
    <article className="space-y-4 rounded-md border-sm border-black bg-secondary-tint p-4">
      <Heading4 className="text-secondary-shadow">Go Pro</Heading4>
      <div className="mb-3 space-y-2">
        <FeaturesCarousel features={features} type="subscribe" />
      </div>
      <Button
        className="flex w-full items-center justify-center gap-2"
        rounded
        theme="accent"
        onClick={onSubscribe}
      >
        <Icon filled name="workspace_premium" size={24} />
        <FocusSpan>Subscribe Now</FocusSpan>
      </Button>
    </article>
  );
};

export default ProfileCardSubscription;
