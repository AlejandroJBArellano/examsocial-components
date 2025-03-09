import {
  ProfilePlaceholder,
  ProfilePlaceholderProps,
} from "../ProfilePlaceholder";

const Profile = (props: ProfilePlaceholderProps) => {
  return (
    <button className="border-sm border-gray-600 px-4 hover:border-black md:px-6 md:py-1 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6">
      <ProfilePlaceholder {...props} />
    </button>
  );
};

export default Profile;
