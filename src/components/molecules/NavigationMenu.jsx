import NavigationLink from "../atoms/NavigationLink";
import { navigationItems } from "../../data/navigation";

const NavigationMenu = ({
  isOpen = false,
  activeSection = "home",
  onNavigate,
}) => {
  return (
    <nav
      id="main-navigation"
      className={`
        w-full
        items-center
        justify-between
        md:order-1
        md:w-auto
        md:flex
        ${isOpen ? "flex" : "hidden"}
      `}
    >
      <ul
        className="
          flex
          w-full
          flex-col
          gap-1
          rounded-xl
          border
          border-border
          bg-surface
          p-4
          text-sm
          font-medium
          md:w-auto
          md:flex-row
          md:items-center
          md:gap-8
          md:border-0
          md:bg-transparent
          md:p-0
        "
      >
        {navigationItems.map((item) => (
          <li key={item.href}>
            <NavigationLink
              href={item.href}
              isActive={
                activeSection === item.href.replace("#", "")
              }
              onClick={onNavigate}
            >
              {item.label}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;