import { useEffect, useRef, useState } from "react";

import LanguageButton from "../atoms/LanguageButton";
import LanguageDropdown from "../molecules/LanguageDropdown";

const LanguageSelector = () => {
  const [language, setLanguage] = useState({
    language: "Español (ES)",
    country: "es",
    code: "es",
  });

  const [isOpen, setIsOpen] = useState(false);

  const selectorRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleLanguageChange = (selectedLanguage) => {
    console.log(selectedLanguage);

    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <div
      ref={selectorRef}
      className="relative"
    >
      <LanguageButton
        language={language.language}
        country={language.country}
        onClick={handleToggle}
      />

      {isOpen && (
        <LanguageDropdown
          onLanguageChange={handleLanguageChange}
        />
      )}
    </div>
  );
};

export default LanguageSelector;