const Option = ({
  option,
  selectAnswer,
}: {
  option: { id: string; text: string };
  selectAnswer: (id: string) => void;
}) => {
  const handleClickAnswer = () => {
    selectAnswer(option.id as string);
  };
  return (
    <label
      htmlFor={option.id}
      aria-hidden="true"
      className={`bg-light flex cursor-pointer items-center gap-2 rounded-full border-sm border-black p-3 text-2xl duration-300`}
      onClick={handleClickAnswer}
    >
      <input
        id={option.id}
        type="radio"
        data-testid="option"
        className="bg-light h-8 w-8 rounded-full text-white accent-primary"
      />
      {option.text}
    </label>
  );
};

export default Option;
