import LanguageOption from "../molecules/LanguageOption";

const languages = [
  {
    language: "English (US)",
    country: "us",
    code: "en",
  },
  {
    language: "Español (ES)",
    country: "es",
    code: "es",
  }
];

const LanguageDropdown = ({ onLanguageChange }) => {
  return (
    <div
      className="
        absolute right-0 z-50
        w-44
        rounded-xl
        border border-border
        bg-surface
        shadow-lg
      "
      role="menu"
    >
      <ul className="p-2" role="none">
        {languages.map((language) => (
          <LanguageOption
            key={language.code}
            language={language.language}
            country={language.country}
            onClick={() => onLanguageChange(language)}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;