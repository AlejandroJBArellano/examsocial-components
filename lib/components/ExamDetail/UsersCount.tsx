import { MaterialSymbol } from "react-material-symbols";
import { FocusDisplay, Heading3 } from "../FontFaces";

const UsersCount = () => {
  return (
    <div className="rounded-lg p-8 border border-primary-shadow bg-primary-tint space-y-5">
      <div className="flex gap-4">
        <MaterialSymbol icon="person_check" size={64} fill />
        <FocusDisplay>289</FocusDisplay>
      </div>
      <Heading3 className="ml-20">exams taken</Heading3>
    </div>
  );
};

export default UsersCount;
