import PhotoIcon from "@mui/icons-material/Photo";

const BannerInput = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label
    htmlFor="banner"
    className="xl:h-46 flex h-36 max-w-[358px] cursor-pointer items-center justify-center rounded-md border border-black bg-secondary p-4 xl:max-w-[640px]"
  >
    <div className="rounded-full border border-black bg-white p-2">
      <PhotoIcon data-testid="PhotoIcon" />
    </div>
    <input
      id="banner"
      data-testid="banner"
      type="file"
      className="hidden"
      accept="image/*"
      multiple
      onChange={onChange}
    />
  </label>
);

export default BannerInput;
