import { useState } from "react";
import ThemeToggle from "../../atoms/ThemeToggle";

import Brand from "../../molecules/Brand";
import LanguageSelector from "../../molecules/LanguageSelector";
import MenuButton from "../../atoms/MenuButton";
import NavigationMenu from "../../molecules/NavigationMenu";

import logo from "../../../assets/brand.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-20 w-full border-b border-border bg-surface backdrop-blur">
      <div
        className="
      mx-auto
      flex
      max-w-7xl
      items-center
      justify-between
      px-4
      py-3
    "
      >
        <Brand src={logo} alt="Kevin Stif" name="Kevin Stif" />

        {/* Desktop navigation */}
        <div className="hidden md:block md:order-1">
          <NavigationMenu activeSection={activeSection} isOpen={true} onNavigate={handleNavigation} />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 md:order-2">
          <ThemeToggle />

          <div className="md:hidden">
            <MenuButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <NavigationMenu
          activeSection={activeSection}
          isOpen={isMenuOpen}
          onNavigate={handleNavigation}
          className="md:hidden animate__animated animate__fadeIn"
        />
      )}
    </nav>
  );
};

export default Navbar;
