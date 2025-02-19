import { Delete, Edit } from "@mui/icons-material";
import { Button } from "../Button";

const QuestionDetail = () => {
  return (
    <div className="shadow-right p-8 border-sm border-black rounded-md space-y-8">
      <div className="flex gap-6">
        <h3 className="text-[32px] font-bold leading-8 tracking-[0.64px] sentient">
          Which of the following is a correct way to create a writable store in
          Svelte?
        </h3>
        <div className="flex flex-col gap-4 items-center">
          <Button rounded className="p-2">
            <Edit className="!w-6 !h-6" />
          </Button>
          <Button theme="feedback-error" rounded className="p-2">
            <Delete className="!w-6 !h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
