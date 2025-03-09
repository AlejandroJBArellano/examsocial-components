import {
  ProfilePlaceholder,
  ProfilePlaceholderProps,
} from "../ProfilePlaceholder";
const Profile = (props: ProfilePlaceholderProps) => {
  return (
    <button className="border-x-sm border-gray-600 px-4 hover:border-black md:px-6 md:py-1 xl:px-7 xl:py-5 2xl:px-8 2xl:py-6">
      <ProfilePlaceholder
        {...props}
        className="size-9 md:size-11 xl:size-12 2xl:size-13"
      />
    </button>
  );
};

export default Profile;
