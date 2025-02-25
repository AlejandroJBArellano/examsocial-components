import { Bookmark, Favorite } from "@mui/icons-material";
import { Button } from "../Button";
import { FocusSpan, Paragraph } from "../FontFaces";

const ExamDescription = () => {
  return (
    <div className="py-6 px-4 space-y-6 bg-primary-tint">
      <Paragraph>
        Welcome to the Svelte 5 Quiz! This quiz is designed to test your
        knowledge and understanding of Svelte
      </Paragraph>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Button theme="light" className="p-2 bg-transparent">
            <Favorite className="!size-5" width={20} height={20} />
          </Button>
          <Button theme="light" className="p-2 bg-transparent">
            <Bookmark className="!size-5" width={20} height={20} />
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
