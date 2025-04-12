import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "../Icon";
import { MenuItem, MenuItemProps } from "../MenuItem";

const Menu = ({ items }: { items: MenuItemProps[] }) => (
  <NavigationMenu.Root delayDuration={0}>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>
          <Icon name="menu" className="cursor-pointer" />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="w-50 absolute right-0 top-full z-50 border border-black bg-light">
          {items.map((item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export default Menu;
