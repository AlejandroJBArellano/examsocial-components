import { FocusDisplay, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

const UsersCount = () => {
  return (
    <div className="space-y-5 rounded-lg border border-primary-shadow bg-primary-tint p-8">
      <div className="flex gap-4">
        <Icon name="person_check" size={64} />
        <FocusDisplay>289</FocusDisplay>
      </div>
      <Heading3 className="ml-20">exams taken</Heading3>
    </div>
  );
};

export default UsersCount;
