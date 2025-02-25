import { Replay } from "@mui/icons-material";
import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";

const ResultTakeExam = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="w-[171px] h-[171px] relative mx-auto">
        <div className="w-[171px] h-[171px] left-0 top-0 absolute bg-[#65e4ff] rounded-full border border-[#037c95]" />
        <div className="w-[171px] h-[171px] left-0 top-[-0px] absolute bg-[#edfafd] rounded-full" />
        <div className="w-[100px] left-[35.50px] top-[51.50px] absolute text-center text-black text-4xl font-bold font-['Sentient'] leading-[48px] tracking-wide">
          75%
        </div>
        <div className="w-[100px] left-[35.50px] top-[99.50px] absolute text-center text-black text-lg font-medium font-['Satoshi'] leading-tight tracking-tight">
          15/20
        </div>
      </div>
      <Heading3 className="text-primary-shadow text-center leading-[32px]">
        Congrats! You have approved this exam.
      </Heading3>
      <div className="flex justify-between items-center">
        <FocusSpan>Attempts left: 2</FocusSpan>
        <Button
          theme="extra"
          rounded
          className="flex items-center justify-center gap-2"
        >
          <Replay className="!size-5" width={20} height={20} />
          <FocusSpan>Retry</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default ResultTakeExam;
