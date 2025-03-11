import { FocusDisplay, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

export interface UsersCountProps {
  count: number;
}

const UsersCount = ({ count }: UsersCountProps) => {
  return (
    <section
      className="space-y-5 rounded-lg border border-primary-shadow bg-primary-tint p-8"
      aria-label={`${count} exams taken`}
    >
      <div className="flex gap-4">
        <Icon name="person_check" size={64} aria-hidden="true" />
        <FocusDisplay>{count}</FocusDisplay>
      </div>
      <Heading3 className="ml-20">exams taken</Heading3>
    </section>
  );
};

export default UsersCount;
