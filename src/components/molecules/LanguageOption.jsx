import FlagIcon from "../atoms/FlagIcon";

const LanguageOption = ({
  language,
  country,
  onClick,
}) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="
          inline-flex w-full items-center
          rounded-lg
          p-2
          text-sm font-medium
          text-text
          transition-colors
          hover:bg-primary/10
          hover:text-primary
          focus:outline-none
          focus:ring-2
          focus:ring-primary/50
        "
        role="menuitem"
      >
        <FlagIcon
          country={country}
          className="me-1.5 h-4 w-4"
        />

        {language}
      </button>
    </li>
  );
};

export default LanguageOption;