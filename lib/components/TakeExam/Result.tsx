import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

const ResultTakeExam = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="relative mx-auto h-[171px] w-[171px]">
        <div className="absolute left-0 top-0 h-[171px] w-[171px] rounded-full border border-[#037c95] bg-[#65e4ff]" />
        <div className="absolute left-0 top-[-0px] h-[171px] w-[171px] rounded-full bg-[#edfafd]" />
        <div className="absolute left-[35.50px] top-[51.50px] w-[100px] text-center font-['Sentient'] text-4xl font-bold leading-[48px] tracking-wide text-black">
          75%
        </div>
        <div className="absolute left-[35.50px] top-[99.50px] w-[100px] text-center font-['Satoshi'] text-lg font-medium leading-tight tracking-tight text-black">
          15/20
        </div>
      </div>
      <Heading3 className="text-center leading-[32px] text-primary-shadow">
        Congrats! You have approved this exam.
      </Heading3>
      <div className="flex items-center justify-between">
        <FocusSpan>Attempts left: 2</FocusSpan>
        <Button
          theme="extra"
          rounded
          className="flex items-center justify-center gap-2"
        >
          <Icon name="replay" className="!size-5" />
          <FocusSpan>Retry</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default ResultTakeExam;
