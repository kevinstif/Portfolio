const SkillCategory = ({
  title,
  description,
  icon,
  children,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-6
      "
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-2xl
          "
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-text">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default SkillCategory;