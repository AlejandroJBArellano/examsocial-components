const Option = ({
  option,
  selectAnswer,
}: {
  option: { _id: string; text: string };
  selectAnswer: (_id: string) => void;
}) => {
  const handleClickAnswer = () => {
    selectAnswer(option._id as string);
  };
  return (
    <label
      htmlFor={option._id}
      aria-hidden="true"
      className={`flex cursor-pointer items-center gap-2 rounded-full border-sm border-black bg-white p-3 text-2xl duration-300`}
      onClick={handleClickAnswer}
    >
      <input
        id={option._id}
        type="radio"
        data-testid="option"
        className="h-8 w-8 rounded-full bg-white text-white accent-primary"
      />
      {option.text}
    </label>
  );
};

export default Option