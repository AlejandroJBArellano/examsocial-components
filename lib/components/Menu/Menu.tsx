import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "../Icon";
import { MenuItem } from "../MenuItem";

interface IMenuItem {
  icon: string;
  label: string;
  href: string;
}

const Menu = ({ items }: { items: IMenuItem[] }) => (
  <NavigationMenu.Root delayDuration={0}>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
          <Icon name="menu" className="cursor-pointer" />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="w-50 bg-light absolute right-0 top-full z-50 border-sm border-black">
          {items.map((item) => (
            <MenuItem key={item.href} href={item.href} icon={item.icon}>
              {item.label}
            </MenuItem>
          ))}
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export default Menu;
