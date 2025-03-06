import PhotoIcon from "@mui/icons-material/Photo";

const BannerInput = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label
    htmlFor="banner"
    className="flex aspect-video cursor-pointer items-center justify-center rounded-md border border-black bg-secondary p-4"
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
