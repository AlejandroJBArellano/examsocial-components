import { Delete, Edit } from "@mui/icons-material";
import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";

const QuestionDetail = () => {
  return (
    <section className="shadow-right p-8 border-sm border-black rounded-md space-y-8">
      <article className="flex gap-6">
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
      </article>
      <article>
        <div className="flex gap-6 ">
          <AnswerOption checked type="viewOnly">
            import {"{writable}"} from 'svelte/store'; {"\n "}
            const store = writable([]);
          </AnswerOption>
          <div className="flex gap-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <mask id="path-1-inside-1_780_27731" fill="white">
                <path d="M48 24C48 27.1517 47.3792 30.2726 46.1731 33.1844C44.967 36.0962 43.1992 38.742 40.9706 40.9706C38.742 43.1992 36.0962 44.967 33.1844 46.1731C30.2726 47.3792 27.1517 48 24 48L24 36C25.5759 36 27.1363 35.6896 28.5922 35.0866C30.0481 34.4835 31.371 33.5996 32.4853 32.4853C33.5996 31.371 34.4835 30.0481 35.0866 28.5922C35.6896 27.1363 36 25.5759 36 24H48Z" />
              </mask>
              <path
                d="M48 24C48 27.1517 47.3792 30.2726 46.1731 33.1844C44.967 36.0962 43.1992 38.742 40.9706 40.9706C38.742 43.1992 36.0962 44.967 33.1844 46.1731C30.2726 47.3792 27.1517 48 24 48L24 36C25.5759 36 27.1363 35.6896 28.5922 35.0866C30.0481 34.4835 31.371 33.5996 32.4853 32.4853C33.5996 31.371 34.4835 30.0481 35.0866 28.5922C35.6896 27.1363 36 25.5759 36 24H48Z"
                fill="#19B244"
                stroke="#19B244"
                stroke-width="0.280702"
                mask="url(#path-1-inside-1_780_27731)"
              />
              <path
                d="M24 48C19.2532 48 14.6131 46.5924 10.6663 43.9553C6.71953 41.3181 3.64339 37.5698 1.82689 33.1844C0.0103876 28.799 -0.464892 23.9734 0.461154 19.3178C1.3872 14.6623 3.67298 10.3859 7.02944 7.02944C10.3859 3.67298 14.6623 1.3872 19.3178 0.461153C23.9734 -0.464892 28.799 0.0103887 33.1844 1.82689C37.5698 3.6434 41.3181 6.71954 43.9553 10.6663C46.5924 14.6131 48 19.2533 48 24L36 24C36 21.6266 35.2962 19.3065 33.9776 17.3332C32.6591 15.3598 30.7849 13.8217 28.5922 12.9134C26.3995 12.0052 23.9867 11.7676 21.6589 12.2306C19.3311 12.6936 17.1929 13.8365 15.5147 15.5147C13.8365 17.1929 12.6936 19.3311 12.2306 21.6589C11.7676 23.9867 12.0052 26.3995 12.9134 28.5922C13.8217 30.7849 15.3598 32.6591 17.3332 33.9776C19.3065 35.2962 21.6266 36 24 36L24 48Z"
                fill="#DBFAE4"
              />
            </svg>
            <h3 className="sentient text-[32px] leading-10 font-bold tracking-[0.64px]">
              25%
            </h3>
          </div>
        </div>
      </article>
    </section>
  );
};

export default QuestionDetail;
