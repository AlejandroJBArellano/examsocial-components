import { Grade, Timer } from "@mui/icons-material";
import { MaterialSymbol } from "react-material-symbols";
import { Anchor, Heading3, Heading5, Heading6 } from "../FontFaces";
import BannerExam from "./Banner";

const HeaderExam = () => {
  return (
    <div className="p-6 space-y-6 bg-secondary-tint">
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
          <div className="flex gap-2 items-center">
            <Heading6>391</Heading6>
            <MaterialSymbol icon="person_check" fill size={20} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="gap-2 flex items-center text-secondary-shadow">
            <Timer className="!size-8" />
            <Heading3>2 hours</Heading3>
          </div>
          <div className="flex gap-1 items-center">
            <Heading5>4.9</Heading5>
            <Grade className="!size-8 text-extra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderExam;
