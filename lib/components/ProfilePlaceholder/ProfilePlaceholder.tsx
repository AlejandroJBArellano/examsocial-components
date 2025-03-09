import {
  FemaleFilled,
  FemaleUnfilled,
  MaleFilled,
  MaleUnfilled,
} from "../../Illustrations/profilePlaceholder";

export type ProfilePlaceholderGender = "male" | "female";

export interface ProfilePlaceholderProps {
  gender: ProfilePlaceholderGender;
  filled?: boolean;
}

const ProfilePlaceholder = ({ gender, filled }: ProfilePlaceholderProps) => {
  const genders = {
    male: {
      unfilled: MaleUnfilled,
      filled: MaleFilled,
    },
    female: {
      unfilled: FemaleUnfilled,
      filled: FemaleFilled,
    },
  };
  return genders[gender][filled ? "filled" : "unfilled"];
};

export default ProfilePlaceholder;
