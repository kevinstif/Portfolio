const SkillItem = ({
  iconClass,
  name,
  description,
  experience,
}) => {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-xl
        border
        border-border
        bg-base
        p-4
        transition-all
        hover:border-primary
        hover:bg-primary/5
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-surface
        "
      >
        <i
          className={`${iconClass} text-3xl`}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-semibold text-text">
            {name}
          </h4>

          {experience && (
            <span
              className="
                whitespace-nowrap
                rounded-full
                bg-accent/10
                px-2.5
                py-1
                text-xs
                font-medium
                text-accent
              "
            >
              {experience}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillItem;