import FlagIcon from "./FlagIcon";

const LanguageButton = ({
  language = "English (US)",
  country = "us",
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        cursor-pointer
        flex items-center
        rounded-lg
        border border-transparent
        bg-transparent
        px-3 py-2
        text-sm font-medium
        leading-5
        text-text
        transition-colors
        hover:bg-primary-deep
        focus:outline-none
        focus:ring-2
        focus:ring-primary/50
      "
    >
      <FlagIcon
        country={country}
        className="me-1.5 h-4 w-4"
      />

      {language}
    </button>
  );
};

export default LanguageButton;