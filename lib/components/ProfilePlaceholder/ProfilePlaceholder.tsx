import { SVGProps } from "react";
import {
  FemaleFilled,
  FemaleUnfilled,
  MaleFilled,
  MaleUnfilled,
} from "../../illustrations/profilePlaceholder";

export type ProfilePlaceholderGender = "male" | "female";

export interface ProfilePlaceholderProps extends SVGProps<SVGSVGElement> {
  gender: ProfilePlaceholderGender;
  filled?: boolean;
}

const ProfilePlaceholder = ({
  gender,
  filled,
  ...props
}: ProfilePlaceholderProps) => {
  const genders = {
    male: {
      unfilled: <MaleUnfilled {...props} />,
      filled: <MaleFilled {...props} />,
    },
    female: {
      unfilled: <FemaleUnfilled {...props} />,
      filled: <FemaleFilled {...props} />,
    },
  };
  return genders[gender][filled ? "filled" : "unfilled"];
};

export default ProfilePlaceholder;
