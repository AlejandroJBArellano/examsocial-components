import {
  FemaleFilled,
  FemaleUnfilled,
  MaleFilled,
  MaleUnfilled,
} from "../../Illustrations/profilePlaceholder";

const ProfilePlaceholder = ({
  gender,
  filled,
}: {
  gender: "male" | "female";
  filled?: boolean;
}) => {
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
