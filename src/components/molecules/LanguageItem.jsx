const LanguageItem = ({
  name,
  level,
}) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-border
        bg-base
        p-4
      "
    >
      <h4 className="font-semibold text-text">
        {name}
      </h4>

      <p className="mt-1 text-sm text-accent">
        {level}
      </p>
    </div>
  );
};

export default LanguageItem;