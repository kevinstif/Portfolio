import { useState } from "react";
import ThemeToggle from "../../atoms/ThemeToggle";

import Brand from "../../molecules/Brand";
import LanguageSelector from "../../molecules/LanguageSelector";
import MenuButton from "../../atoms/MenuButton";
import NavigationMenu from "../../molecules/NavigationMenu";

import logo from "../../../assets/brand.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        inset-x-0
        z-20
        w-full
        border-b
        border-border
        bg-surface
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-wrap
          items-center
          justify-between
          px-4
          py-3
        "
      >
        <Brand
          src={logo}
          alt="Kevin Stif"
          name="Kevin Stif"
        />

        {/* Desktop navigation */}
        <div className="hidden md:block md:order-1">
          <NavigationMenu
            isOpen={true}
            onNavigate={handleNavigation}
          />
        </div>

        {/* Controls */}
        <div
          className="
            flex
            items-center
            gap-1
            md:order-2
          "
        >
          {/*
            <LanguageSelector />
          */}

          <ThemeToggle />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MenuButton
              isOpen={isMenuOpen}
              onClick={handleMenuToggle}
            />
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className="
            order-3
            w-full
            md:hidden
          "
        >
          <NavigationMenu
            isOpen={isMenuOpen}
            onNavigate={handleNavigation}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;