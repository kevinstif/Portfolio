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
        gap-3
        rounded-xl
        border
        border-border
        bg-base
        p-3
        transition-all
        hover:border-primary
        hover:bg-primary/5
        sm:gap-4
        sm:p-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-surface
          sm:h-12
          sm:w-12
        "
      >
        <i
          className={`${iconClass} text-2xl sm:text-3xl`}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div
          className="
            flex
            flex-col
            gap-2
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-3
          "
        >
          <h4 className="font-semibold text-text">
            {name}
          </h4>

          {experience && (
            <span
              className="
                w-fit
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