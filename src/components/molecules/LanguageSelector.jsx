import { useState } from "react";

import LanguageButton from "../atoms/LanguageButton";
import LanguageDropdown from "../molecules/LanguageDropdown";

const LanguageSelector = () => {

  const [language, setLanguage] = useState({
    language: "Español (ES)",
    country: "es",
    code: "es",
  })
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleLanguageChange = (language) => {
    console.log(language);
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
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