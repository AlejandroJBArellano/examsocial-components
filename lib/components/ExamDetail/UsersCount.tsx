import { FocusDisplay, Heading3 } from "../FontFaces";

const UsersCount = () => {
  return (
    <div className="space-y-5 rounded-lg border border-primary-shadow bg-primary-tint p-8">
      <div className="flex gap-4">
        {/* <PersonCheck className="!size-16" /> */}
        <FocusDisplay>289</FocusDisplay>
      </div>
      <Heading3 className="ml-20">exams taken</Heading3>
    </div>
  );
};

export default UsersCount;
