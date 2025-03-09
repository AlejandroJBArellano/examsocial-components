import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

const ExamDescription = () => {
  return (
    <div className="space-y-6 bg-primary-tint px-4 py-6">
      <Paragraph>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte
      </Paragraph>
      <div className="flex items-end justify-between">
        <div className="flex gap-3">
          <Button.Icon theme="light" className="bg-transparent p-2" size={20}>
            favorite
          </Button.Icon>
          <Button.Icon theme="light" className="bg-transparent p-2" size={20}>
            bookmark
          </Button.Icon>
        </div>
        <Button theme="accent">
          <FocusSpan>Start exam</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default ExamDescription;
