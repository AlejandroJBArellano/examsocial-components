import { AnswerOption } from "../AnswerOption";
import { Button } from "../Button";
import { Heading3 } from "../FontFaces";

const QuestionDetail = () => {
  return (
    <section className="w-full max-w-2xl space-y-8 rounded-md border-sm border-black p-8 shadow-right">
      <article className="flex gap-6">
        <Heading3>
          Which of the following is a correct way to create a writable store in
          Svelte?
        </Heading3>
        <div className="flex flex-col items-center gap-4">
          <Button.Icon rounded size={24} filled>
            edit
          </Button.Icon>
          <Button.Icon theme="feedback-error" rounded size={24} filled>
            delete
          </Button.Icon>
        </div>
      </article>
      <article>
        <div className="flex gap-6">
          <div className="flex-1">
            <AnswerOption checked type="viewOnly">
              import {"{writable}"} from 'svelte/store'; {"\n "}
              const store = writable([]);
            </AnswerOption>
          </div>
          <div className="flex items-center justify-center gap-2">
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
            <Heading3>25%</Heading3>
          </div>
        </div>
      </article>
    </section>
  );
};

export default QuestionDetail;
