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
        md:order-1
        md:w-auto
        md:flex
        ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }
        transition-all
        duration-200
        ease-out
        md:translate-y-0
        md:opacity-100
        md:pointer-events-auto
      `}
    >
      <ul
        className="
          flex
          w-full
          flex-col
          gap-1
          py-3
          text-sm
          font-medium

          md:w-auto
          md:flex-row
          md:items-center
          md:gap-8
          md:py-0
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