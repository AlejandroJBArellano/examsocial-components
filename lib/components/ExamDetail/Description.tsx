import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";
import { Icon } from "../Icon";

const ExamDescription = () => {
  return (
    <div className="space-y-6 bg-primary-tint px-4 py-6">
      <Paragraph>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte
      </Paragraph>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Button theme="light" className="bg-transparent p-2">
            <Icon name="favorite" className="!size-5" />
          </Button>
          <Button theme="light" className="bg-transparent p-2">
            <Icon name="bookmark" className="!size-5" />
          </Button>
        </div>
        <Button theme="accent">
          <FocusSpan>Start exam</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default ExamDescription;
