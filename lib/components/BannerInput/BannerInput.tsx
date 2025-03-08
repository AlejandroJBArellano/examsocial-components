import { Icon } from "../Icon";

const BannerInput = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label
    htmlFor="banner"
    className="flex aspect-video cursor-pointer items-center justify-center rounded-md border border-black bg-secondary p-4"
  >
    <div className="flex items-center justify-center rounded-full border border-black bg-white p-2">
      <Icon
        filled
        name="photo"
        data-testid="PhotoIcon"
        size={20}
        variant="sharp"
      />
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
