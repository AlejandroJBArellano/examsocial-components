import { Button } from "../Button";

const ReportExam = () => {
  return (
    <section className="p-4 border border-black rounded-md space-y-6">
      <article className="space-y-2">
        <h2 className="sentient text-2xl leading-7 font-medium tracking-[0.48px]">
          Report Exam
        </h2>
        <p className="text-base leading-5">
          Please, select the reason why you are reporting this exam from the
          list below:
        </p>
      </article>
      <article className="grid grid-cols-2 gap-4">
        <Button theme="light" rounded>
          Cancel
        </Button>
        <Button theme="accent" rounded>
          Next
        </Button>
      </article>
    </section>
  );
};

export default ReportExam;
