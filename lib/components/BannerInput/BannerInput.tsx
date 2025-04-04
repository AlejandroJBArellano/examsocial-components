import { Icon } from "../Icon";

const BannerInput = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <label
    htmlFor="banner"
    className="flex aspect-video h-36 w-full max-w-xs cursor-pointer items-center justify-center rounded-md border border-black bg-secondary p-4 xl:aspect-auto xl:h-46 xl:max-w-2xl"
  >
    <div className="bg-light flex items-center justify-center rounded-full border border-black p-2">
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
